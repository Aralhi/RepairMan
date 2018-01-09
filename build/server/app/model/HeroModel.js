"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9IZXJvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBSUksbUJBQVksU0FBcUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELHNCQUFJLDJCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQWlCO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFTCxnQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFVLFNBQVMsQ0FBQyIsImZpbGUiOiJhcHAvbW9kZWwvSGVyb01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElIZXJvTW9kZWwgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMvSGVyb01vZGVsJyk7XG5cbmNsYXNzIEhlcm9Nb2RlbCB7XG5cbiAgICBwcml2YXRlIF9oZXJvTW9kZWw6IElIZXJvTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihoZXJvTW9kZWw6IElIZXJvTW9kZWwpIHtcbiAgICAgICAgdGhpcy5faGVyb01vZGVsID0gaGVyb01vZGVsO1xuICAgIH1cbiAgICBnZXQgbmFtZSAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlcm9Nb2RlbC5uYW1lO1xuICAgIH1cblxuICAgIGdldCBwb3dlciAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlcm9Nb2RlbC5wb3dlcjtcbiAgICB9XG5cbiAgICBnZXQgYW1vdW50UGVvcGxlU2F2ZWQgKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZXJvTW9kZWwuYW1vdW50UGVvcGxlU2F2ZWQ7XG4gICAgfVxuICAgIFxufVxuT2JqZWN0LnNlYWwoSGVyb01vZGVsKTtcbmV4cG9ydCA9ICBIZXJvTW9kZWw7Il19
