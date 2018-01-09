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
var HeroSchema = require("./../dataAccess/schemas/HeroSchema");
var RepositoryBase = require("./BaseRepository");
var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        return _super.call(this, HeroSchema) || this;
    }
    return HeroRepository;
}(RepositoryBase));
Object.seal(HeroRepository);
module.exports = HeroRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0hlcm9SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsK0RBQWtFO0FBQ2xFLGlEQUFvRDtBQUVwRDtJQUE4QixrQ0FBMEI7SUFDcEQ7ZUFDSSxrQkFBTSxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjZCLGNBQWMsR0FJM0M7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLGlCQUFTLGNBQWMsQ0FBQyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS9IZXJvUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9IZXJvTW9kZWxcIik7XG5pbXBvcnQgSUhlcm9Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL2ludGVyZmFjZXMvSGVyb01vZGVsXCIpO1xuaW1wb3J0IEhlcm9TY2hlbWEgPSByZXF1aXJlKFwiLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvSGVyb1NjaGVtYVwiKTtcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoXCIuL0Jhc2VSZXBvc2l0b3J5XCIpO1xuXG5jbGFzcyBIZXJvUmVwb3NpdG9yeSAgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJSGVyb01vZGVsPiB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihIZXJvU2NoZW1hKTtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKEhlcm9SZXBvc2l0b3J5KTtcbmV4cG9ydCA9IEhlcm9SZXBvc2l0b3J5OyJdfQ==
