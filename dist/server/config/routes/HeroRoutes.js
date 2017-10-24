"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvSGVyb1JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCxpQ0FBb0M7QUFDcEMsbUVBQXNFO0FBRXRFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QjtJQUdJO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDRCxzQkFBSSw4QkFBTTthQUFWO1lBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUV0QyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFHTCxpQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hCLGlCQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJjb25maWcvcm91dGVzL0hlcm9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgSGVyb0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9IZXJvQ29udHJvbGxlclwiKTtcblxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5jbGFzcyBIZXJvUm91dGVzIHtcbiAgICBwcml2YXRlIF9oZXJvQ29udHJvbGxlcjogSGVyb0NvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX2hlcm9Db250cm9sbGVyID0gbmV3IEhlcm9Db250cm9sbGVyKCk7XG4gICAgfVxuICAgIGdldCByb3V0ZXMgKCkge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IHRoaXMuX2hlcm9Db250cm9sbGVyO1xuXG4gICAgICAgIHJvdXRlci5nZXQoXCIvaGVyb2VzXCIsIGNvbnRyb2xsZXIucmV0cmlldmUpO1xuICAgICAgICByb3V0ZXIucG9zdChcIi9oZXJvZXNcIiwgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KFwiL2hlcm9lcy86X2lkXCIsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmdldChcIi9oZXJvZXMvOl9pZFwiLCBjb250cm9sbGVyLmZpbmRCeUlkKTtcbiAgICAgICAgcm91dGVyLmRlbGV0ZShcIi9oZXJvZXMvOl9pZFwiLCBjb250cm9sbGVyLmRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG5cblxufVxuXG5PYmplY3Quc2VhbChIZXJvUm91dGVzKTtcbmV4cG9ydCA9IEhlcm9Sb3V0ZXM7Il19
