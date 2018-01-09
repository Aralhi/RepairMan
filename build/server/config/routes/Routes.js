"use strict";
var express = require("express");
var HeroRoutes = require("../routes/HeroRoutes");
var CustomerRoutes = require("../routes/CustomerRoutes");
var OrderRoutes = require("../routes/OrderRouters");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use('/', new HeroRoutes().routes);
            app.use('/', new CustomerRoutes().routes);
            app.use('/', new OrderRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQ0FBb0M7QUFHcEMsaURBQW9EO0FBQ3BELHlEQUE0RDtBQUM1RCxvREFBdUQ7QUFFdkQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEI7SUFBQTtJQVFBLENBQUM7SUFQQyxzQkFBSSwwQkFBTTthQUFWO1lBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBQ0QsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMvUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuaW1wb3J0IEhlcm9Sb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMvSGVyb1JvdXRlcycpO1xuaW1wb3J0IEN1c3RvbWVyUm91dGVzID0gcmVxdWlyZSgnLi4vcm91dGVzL0N1c3RvbWVyUm91dGVzJyk7XG5pbXBvcnQgT3JkZXJSb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMvT3JkZXJSb3V0ZXJzJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIFJvdXRlcyB7XG4gIGdldCByb3V0ZXMoKSB7XG4gICAgYXBwLnVzZSgnLycsIG5ldyBIZXJvUm91dGVzKCkucm91dGVzKTtcbiAgICBhcHAudXNlKCcvJywgbmV3IEN1c3RvbWVyUm91dGVzKCkucm91dGVzKTtcbiAgICBhcHAudXNlKCcvJywgbmV3IE9yZGVyUm91dGVzKCkucm91dGVzKTtcblxuICAgIHJldHVybiBhcHA7XG4gIH1cbn1cbmV4cG9ydCA9IFJvdXRlcztcbiJdfQ==
