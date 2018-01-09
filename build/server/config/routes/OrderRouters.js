"use strict";
var express = require("express");
var OrderController = require("./../../controllers/OrderController");
var router = express.Router();
var OrderRoutes = (function () {
    function OrderRoutes() {
        this._orderController = new OrderController();
    }
    Object.defineProperty(OrderRoutes.prototype, "routes", {
        get: function () {
            var controller = this._orderController;
            router.get('/orders', controller.retrieve);
            router.post('/orders', controller.create);
            router.put('/orders/:_id', controller.update);
            router.delete('/orders/:_id', controller.delete);
            router.get('/orders/:_id', controller.findById);
            router.get('/orders/:searchText', controller.find);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return OrderRoutes;
}());
Object.seal(OrderRoutes);
module.exports = OrderRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvT3JkZXJSb3V0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQ0FBb0M7QUFDcEMscUVBQXdFO0FBRXhFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QjtJQUVFO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHNCQUFJLCtCQUFNO2FBQVY7WUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixpQkFBUyxXQUFXLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9PcmRlclJvdXRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBPcmRlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuLy4uLy4uL2NvbnRyb2xsZXJzL09yZGVyQ29udHJvbGxlcicpO1xuXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNsYXNzIE9yZGVyUm91dGVzIHtcbiAgcHJpdmF0ZSBfb3JkZXJDb250cm9sbGVyOiBPcmRlckNvbnRyb2xsZXI7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29yZGVyQ29udHJvbGxlciA9IG5ldyBPcmRlckNvbnRyb2xsZXIoKTtcbiAgfVxuXG4gIGdldCByb3V0ZXMoKSB7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLl9vcmRlckNvbnRyb2xsZXI7XG4gICAgcm91dGVyLmdldCgnL29yZGVycycsIGNvbnRyb2xsZXIucmV0cmlldmUpO1xuICAgIHJvdXRlci5wb3N0KCcvb3JkZXJzJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgIHJvdXRlci5wdXQoJy9vcmRlcnMvOl9pZCcsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICByb3V0ZXIuZGVsZXRlKCcvb3JkZXJzLzpfaWQnLCBjb250cm9sbGVyLmRlbGV0ZSk7XG4gICAgcm91dGVyLmdldCgnL29yZGVycy86X2lkJywgY29udHJvbGxlci5maW5kQnlJZCk7XG4gICAgcm91dGVyLmdldCgnL29yZGVycy86c2VhcmNoVGV4dCcsIGNvbnRyb2xsZXIuZmluZCk7XG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfVxufVxuT2JqZWN0LnNlYWwoT3JkZXJSb3V0ZXMpO1xuZXhwb3J0ID0gT3JkZXJSb3V0ZXM7XG4iXX0=
