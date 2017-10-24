"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var HeroModel = (function () {
    function HeroModel(heroModel) {
        this._heroModel = heroModel;
    }
    Object.defineProperty(HeroModel.prototype, "name", {
        get: function () {
            return this._heroModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "power", {
        get: function () {
            return this._heroModel.power;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeroModel.prototype, "amountPeopleSaved", {
        get: function () {
            return this._heroModel.amountPeopleSaved;
        },
        enumerable: true,
        configurable: true
    });
    return HeroModel;
}());
Object.seal(HeroModel);
module.exports = HeroModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9IZXJvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBSUg7SUFJSSxtQkFBWSxTQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVMLGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsaUJBQVUsU0FBUyxDQUFDIiwiZmlsZSI6ImFwcC9tb2RlbC9IZXJvTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBJSGVyb01vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL0hlcm9Nb2RlbCcpO1xuXG5jbGFzcyBIZXJvTW9kZWwge1xuXG4gICAgcHJpdmF0ZSBfaGVyb01vZGVsOiBJSGVyb01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoaGVyb01vZGVsOiBJSGVyb01vZGVsKSB7XG4gICAgICAgIHRoaXMuX2hlcm9Nb2RlbCA9IGhlcm9Nb2RlbDtcbiAgICB9XG4gICAgZ2V0IG5hbWUgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZXJvTW9kZWwubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgcG93ZXIgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZXJvTW9kZWwucG93ZXI7XG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudFBlb3BsZVNhdmVkICgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVyb01vZGVsLmFtb3VudFBlb3BsZVNhdmVkO1xuICAgIH1cbiAgICBcbn1cbk9iamVjdC5zZWFsKEhlcm9Nb2RlbCk7XG5leHBvcnQgPSAgSGVyb01vZGVsOyJdfQ==
