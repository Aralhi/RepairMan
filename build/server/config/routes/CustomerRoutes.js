"use strict";
var express = require("express");
var CustomerController = require("./../../controllers/CustomerController");
var router = express.Router();
var CustomerRoutes = (function () {
    function CustomerRoutes() {
        this._customerController = new CustomerController();
    }
    Object.defineProperty(CustomerRoutes.prototype, "routes", {
        get: function () {
            var controller = this._customerController;
            router.get('/customers', controller.retrieve);
            router.post('/customers', controller.create);
            router.put('/customers/:_id', controller.update);
            // router.get('/customers/:_id', controller.findById)
            router.delete('/customers/:_id', controller.delete);
            router.get('/customers/:searchText', controller.find);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerRoutes;
}());
Object.seal(CustomerRoutes);
module.exports = CustomerRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvQ3VzdG9tZXJSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFtQztBQUNuQywyRUFBNkU7QUFFN0UsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQzdCO0lBR0U7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFBO0lBQ3JELENBQUM7SUFDRCxzQkFBSSxrQ0FBTTthQUFWO1lBQ0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFBO1lBRXpDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDaEQscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXJELE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDZixDQUFDOzs7T0FBQTtJQUNILHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDM0IsaUJBQVMsY0FBYyxDQUFBIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMvQ3VzdG9tZXJSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuaW1wb3J0IEN1c3RvbWVyQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vLi4vLi4vY29udHJvbGxlcnMvQ3VzdG9tZXJDb250cm9sbGVyJylcblxubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcbmNsYXNzIEN1c3RvbWVyUm91dGVzIHtcbiAgcHJpdmF0ZSBfY3VzdG9tZXJDb250cm9sbGVyOiBDdXN0b21lckNvbnRyb2xsZXJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jdXN0b21lckNvbnRyb2xsZXIgPSBuZXcgQ3VzdG9tZXJDb250cm9sbGVyKClcbiAgfVxuICBnZXQgcm91dGVzKCkge1xuICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5fY3VzdG9tZXJDb250cm9sbGVyXG5cbiAgICByb3V0ZXIuZ2V0KCcvY3VzdG9tZXJzJywgY29udHJvbGxlci5yZXRyaWV2ZSlcbiAgICByb3V0ZXIucG9zdCgnL2N1c3RvbWVycycsIGNvbnRyb2xsZXIuY3JlYXRlKVxuICAgIHJvdXRlci5wdXQoJy9jdXN0b21lcnMvOl9pZCcsIGNvbnRyb2xsZXIudXBkYXRlKVxuICAgIC8vIHJvdXRlci5nZXQoJy9jdXN0b21lcnMvOl9pZCcsIGNvbnRyb2xsZXIuZmluZEJ5SWQpXG4gICAgcm91dGVyLmRlbGV0ZSgnL2N1c3RvbWVycy86X2lkJywgY29udHJvbGxlci5kZWxldGUpXG4gICAgcm91dGVyLmdldCgnL2N1c3RvbWVycy86c2VhcmNoVGV4dCcsIGNvbnRyb2xsZXIuZmluZClcblxuICAgIHJldHVybiByb3V0ZXJcbiAgfVxufVxuXG5PYmplY3Quc2VhbChDdXN0b21lclJvdXRlcylcbmV4cG9ydCA9IEN1c3RvbWVyUm91dGVzXG4iXX0=
