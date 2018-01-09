"use strict";
var express = require("express");
var HeroController = require("./../../controllers/HeroController");
var router = express.Router();
var HeroRoutes = (function () {
    function HeroRoutes() {
        this._heroController = new HeroController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            var controller = this._heroController;
            router.get("/heroes", controller.retrieve);
            router.post("/heroes", controller.create);
            router.put("/heroes/:_id", controller.update);
            router.get("/heroes/:_id", controller.findById);
            router.delete("/heroes/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
}());
Object.seal(HeroRoutes);
module.exports = HeroRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvSGVyb1JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW9DO0FBQ3BDLG1FQUFzRTtBQUV0RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsc0JBQUksOEJBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBR0wsaUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9IZXJvUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBIZXJvQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuLy4uLy4uL2NvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyXCIpO1xuXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNsYXNzIEhlcm9Sb3V0ZXMge1xuICAgIHByaXZhdGUgX2hlcm9Db250cm9sbGVyOiBIZXJvQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5faGVyb0NvbnRyb2xsZXIgPSBuZXcgSGVyb0NvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgZ2V0IHJvdXRlcyAoKSB7XG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5faGVyb0NvbnRyb2xsZXI7XG5cbiAgICAgICAgcm91dGVyLmdldChcIi9oZXJvZXNcIiwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL2hlcm9lc1wiLCBjb250cm9sbGVyLmNyZWF0ZSk7XG4gICAgICAgIHJvdXRlci5wdXQoXCIvaGVyb2VzLzpfaWRcIiwgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZ2V0KFwiL2hlcm9lcy86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiL2hlcm9lcy86X2lkXCIsIGNvbnRyb2xsZXIuZGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gcm91dGVyO1xuICAgIH1cblxuXG59XG5cbk9iamVjdC5zZWFsKEhlcm9Sb3V0ZXMpO1xuZXhwb3J0ID0gSGVyb1JvdXRlczsiXX0=
