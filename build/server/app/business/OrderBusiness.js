"use strict";
var OrderRepository = require("../repository/OrderRepository");
var OrderBusiness = (function () {
    function OrderBusiness() {
        this._orderRepository = new OrderRepository();
    }
    OrderBusiness.prototype.findById = function (_id, callback) {
        this._orderRepository.findById(_id, callback);
    };
    OrderBusiness.prototype.retrieve = function (callback) {
        this._orderRepository.retrieve(callback);
    };
    OrderBusiness.prototype.create = function (item, callback) {
        this._orderRepository.create(item, callback);
    };
    OrderBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._orderRepository.findById(_id, function (err, res) {
            if (err) {
                callback(err, res);
            }
            else {
                _this._orderRepository.update(res._id, item, callback);
            }
        });
    };
    OrderBusiness.prototype.delete = function (_id, callback) {
        this._orderRepository.delete(_id, callback);
    };
    OrderBusiness.prototype.find = function (searchText, callback) {
        var reg = new RegExp(searchText, 'i');
        this._orderRepository.find({ $or: [{ 'name': reg }, { 'no': reg }, { 'carNumber': reg }, { 'subject': reg }] }, callback);
    };
    return OrderBusiness;
}());
Object.seal(OrderBusiness);
module.exports = OrderBusiness;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy9PcmRlckJ1c2luZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrREFBa0U7QUFJbEU7SUFFRTtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVUsR0FBVyxFQUFFLFFBQW1EO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsUUFBMkM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLElBQWlCLEVBQUUsUUFBMkM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELDhCQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsSUFBaUIsRUFBRSxRQUEyQztRQUFsRixpQkFRQztRQVBDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLFFBQTJDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQU0sVUFBa0IsRUFBRSxRQUEyQztRQUNuRSxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQixpQkFBUyxhQUFhLENBQUMiLCJmaWxlIjoiYXBwL2J1c2luZXNzL09yZGVyQnVzaW5lc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJSZXBvc2l0b3J5ID0gcmVxdWlyZSgnLi4vcmVwb3NpdG9yeS9PcmRlclJlcG9zaXRvcnknKTtcbmltcG9ydCBCYXNlQnVzaW5lc3MgPSByZXF1aXJlKCcuL0Jhc2VCdXNpbmVzcycpO1xuaW1wb3J0IElPcmRlck1vZGVsID0gcmVxdWlyZSgnLi8uLi9tb2RlbC9PcmRlck1vZGVsJyk7XG5cbmNsYXNzIE9yZGVyQnVzaW5lc3MgaW1wbGVtZW50cyBCYXNlQnVzaW5lc3M8SU9yZGVyTW9kZWw+IHtcbiAgcHJpdmF0ZSBfb3JkZXJSZXBvc2l0b3J5OiBPcmRlclJlcG9zaXRvcnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29yZGVyUmVwb3NpdG9yeSA9IG5ldyBPcmRlclJlcG9zaXRvcnkoKTtcbiAgfVxuXG4gIGZpbmRCeUlkIChfaWQ6IHN0cmluZywgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IElPcmRlck1vZGVsKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fb3JkZXJSZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0cmlldmUoY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX29yZGVyUmVwb3NpdG9yeS5yZXRyaWV2ZShjYWxsYmFjayk7XG4gIH1cblxuICBjcmVhdGUoaXRlbTogSU9yZGVyTW9kZWwsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9vcmRlclJlcG9zaXRvcnkuY3JlYXRlKGl0ZW0sIGNhbGxiYWNrKTtcbiAgfVxuICB1cGRhdGUoX2lkOiBzdHJpbmcsIGl0ZW06IElPcmRlck1vZGVsLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fb3JkZXJSZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29yZGVyUmVwb3NpdG9yeS51cGRhdGUocmVzLl9pZCwgaXRlbSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRlbGV0ZShfaWQ6IHN0cmluZywgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX29yZGVyUmVwb3NpdG9yeS5kZWxldGUoX2lkLCBjYWxsYmFjayk7XG4gIH1cblxuICBmaW5kIChzZWFyY2hUZXh0OiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKHNlYXJjaFRleHQsICdpJyk7XG4gICAgdGhpcy5fb3JkZXJSZXBvc2l0b3J5LmZpbmQoeyRvcjogW3snbmFtZSc6IHJlZ30sIHsnbm8nOiByZWd9LCB7J2Nhck51bWJlcic6IHJlZ30sIHsnc3ViamVjdCc6IHJlZ31dfSwgY2FsbGJhY2spO1xuICB9XG59XG5PYmplY3Quc2VhbChPcmRlckJ1c2luZXNzKTtcbmV4cG9ydCA9IE9yZGVyQnVzaW5lc3M7XG4iXX0=
