import express = require('express');
import BaseRoutes = require('./config/routes/Routes');
import AuthRoutes = require('./config/routes/AuthRoutes');
import bodyParser = require('body-parser');
import path = require('path');

import passport = require('passport');
import util = require('util');
var QQStrategy = require('passport-qq').Strategy;
import morgan = require('morgan');
import methodOverride = require('method-override');
import cookieParser = require('cookie-parser');
import session = require('express-session');

import UserBusiness = require('./app/business/UserBusiness');
import UserSchema = require('./app/dataAccess/schemas/UserSchema');

var appKey = '101469289';
var appSecret = 'e6ce89d7cf42ee611a1470e9078e6d9d';

var port: number = process.env.PORT || 3000;
var env: string = process.env.NODE_ENV || 'developement';

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new QQStrategy({
    clientID: appKey,
    clientSecret: appSecret,
    callbackURL: 'https://webmixian.cn/auth/qq/callback'
},
    function (accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            // To keep the example simple, the user's qq profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the qq account with a user record in your database,
            // and return that user instead.
            let userBusiness = new UserBusiness();
            userBusiness.findOne({
                user: profile
            } as express.Request, {id: profile.id}, (error, result) => {
                if (!result) {
                    let newUser = new UserSchema({
                        name: profile.nickname,
                        id: profile.id,
                        _raw: profile._raw,
                        _json: profile._json,
                        userId: profile.id
                    });
                    userBusiness.create({
                        user: profile
                    } as express.Request, newUser, (createResult) => {
                        console.log(createResult);
                    });
                }
            });
            return done(null, profile);
        });
    }));

var app = express();

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

app.use(bodyParser.json());
app.use('/api', ensureAuthenticated, new BaseRoutes().routes);
app.use('/auth', new AuthRoutes().routes);

var renderIndex = (req: express.Request, res: express.Response) => {
    // if (!req.user) {
    //     res.redirect('/login');
    // }
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};

app.get('/*', renderIndex);
if (env === 'developement') {
    app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}


// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
    let err = new Error('Not Found');
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    // res.redirect('/');
}

export { app }
