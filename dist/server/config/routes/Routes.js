"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var express = require("express");
var HeroRoutes = require("../routes/HeroRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new HeroRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGlDQUFvQztBQUdwQyxpREFBb0Q7QUFFcEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEI7SUFBQTtJQVFBLENBQUM7SUFORyxzQkFBSSwwQkFBTTthQUFWO1lBRUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0QyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5pbXBvcnQgSGVyb1JvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9IZXJvUm91dGVzJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIFJvdXRlcyB7XG5cbiAgICBnZXQgcm91dGVzKCkge1xuXG4gICAgICAgIGFwcC51c2UoXCIvXCIsIG5ldyBIZXJvUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgfVxufVxuZXhwb3J0ID0gUm91dGVzOyJdfQ==
