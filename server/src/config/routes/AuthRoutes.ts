import express = require('express');
import passport = require('passport');
import UserRoutes = require('../routes/UserRoutes');

let app = express();
class AuthRoutes {
  get routes() {
    app.get('/qq',
    passport.authenticate('qq'),
    function(req, res){
      console.log(req);
      // The request will be redirected to qq for authentication, so this
      // function will not be called.
    });

    app.get('/qq/callback',
      passport.authenticate('qq', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });

    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/login');
    });
    app.use('/user', new UserRoutes().routes);
    return app;
  }
}
export = AuthRoutes;
