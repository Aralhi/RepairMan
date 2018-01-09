"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomerSchema = require("./../dataAccess/schemas/CustomerSchema");
var RepositoryBase = require("./BaseRepository");
var CustomerRepository = (function (_super) {
    __extends(CustomerRepository, _super);
    function CustomerRepository() {
        return _super.call(this, CustomerSchema) || this;
    }
    return CustomerRepository;
}(RepositoryBase));
Object.seal(CustomerRepository);
module.exports = CustomerRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0N1c3RvbWVyUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVFQUEwRTtBQUMxRSxpREFBb0Q7QUFFcEQ7SUFBa0Msc0NBQThCO0lBQzVEO2VBQ0ksa0JBQU0sY0FBYyxDQUFDO0lBQ3pCLENBQUM7SUFDTCx5QkFBQztBQUFELENBSkEsQUFJQyxDQUppQyxjQUFjLEdBSS9DO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hDLGlCQUFTLGtCQUFrQixDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L0N1c3RvbWVyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQ3VzdG9tZXJNb2RlbCA9IHJlcXVpcmUoJy4vLi4vbW9kZWwvQ3VzdG9tZXJNb2RlbCcpO1xuaW1wb3J0IEN1c3RvbWVyU2NoZW1hID0gcmVxdWlyZSgnLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvQ3VzdG9tZXJTY2hlbWEnKTtcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoJy4vQmFzZVJlcG9zaXRvcnknKTtcblxuY2xhc3MgQ3VzdG9tZXJSZXBvc2l0b3J5ICBleHRlbmRzIFJlcG9zaXRvcnlCYXNlPElDdXN0b21lck1vZGVsPiB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihDdXN0b21lclNjaGVtYSk7XG4gICAgfVxufVxuXG5PYmplY3Quc2VhbChDdXN0b21lclJlcG9zaXRvcnkpO1xuZXhwb3J0ID0gQ3VzdG9tZXJSZXBvc2l0b3J5OyJdfQ==
