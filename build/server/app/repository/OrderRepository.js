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
var OrderSchema = require("./../dataAccess/schemas/OrderSchema");
var RepositoryBase = require("./BaseRepository");
var OrderRepository = (function (_super) {
    __extends(OrderRepository, _super);
    function OrderRepository() {
        return _super.call(this, OrderSchema) || this;
    }
    return OrderRepository;
}(RepositoryBase));
Object.seal(OrderRepository);
module.exports = OrderRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L09yZGVyUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGlFQUFvRTtBQUNwRSxpREFBb0Q7QUFFcEQ7SUFBOEIsbUNBQTJCO0lBQ3ZEO2VBQ0Usa0JBQU0sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFDSCxzQkFBQztBQUFELENBSkEsQUFJQyxDQUo2QixjQUFjLEdBSTNDO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QixpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoiYXBwL3JlcG9zaXRvcnkvT3JkZXJSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElPcmRlck1vZGVsID0gcmVxdWlyZSgnLi8uLi9tb2RlbC9PcmRlck1vZGVsJyk7XG5pbXBvcnQgT3JkZXJTY2hlbWEgPSByZXF1aXJlKCcuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9PcmRlclNjaGVtYScpO1xuaW1wb3J0IFJlcG9zaXRvcnlCYXNlID0gcmVxdWlyZSgnLi9CYXNlUmVwb3NpdG9yeScpO1xuXG5jbGFzcyBPcmRlclJlcG9zaXRvcnkgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJT3JkZXJNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihPcmRlclNjaGVtYSk7XG4gIH1cbn1cbk9iamVjdC5zZWFsKE9yZGVyUmVwb3NpdG9yeSk7XG5leHBvcnQgPSBPcmRlclJlcG9zaXRvcnk7XG4iXX0=
