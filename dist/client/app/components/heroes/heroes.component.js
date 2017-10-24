"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("../../services/hero.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero._id]);
    };
    HeroesComponent.prototype.addHero = function () {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './app/components/heroes/heroes.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBZ0Q7QUFDaEQsNERBQXdEO0FBRXhELDBDQUF5QztBQU96QyxJQUFhLGVBQWU7SUFNeEIseUJBQ1ksTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFDekMsbUNBQVMsR0FBVDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxrQ0FBUSxHQUFSLFVBQVMsSUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVsRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQVUsRUFBRSxLQUFVO1FBQWpDLGlCQVNDO1FBUkcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXO2FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNaLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsK0NBQStDO0tBQy9ELENBQUM7cUNBU3NCLGVBQU07UUFDRCwwQkFBVztHQVIzQixlQUFlLENBb0MzQjtBQXBDWSwwQ0FBZSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDAyLTA2LTIwMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZXJvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2hlcm8uc2VydmljZVwiO1xuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2hlcm9cIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVyb2VzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaGVyb2VzOiBIZXJvW107XG4gICAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xuICAgIGVycm9yOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBoZXJvU2VydmljZTogSGVyb1NlcnZpY2UpIHsgfVxuICAgIGdldEhlcm9lcygpIHtcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKS50aGVuKGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEhlcm9lcygpO1xuICAgIH1cbiAgICBvblNlbGVjdChoZXJvOiBIZXJvKSB7IHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybzsgfVxuXG4gICAgZ290b0RldGFpbCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZEhlcm8uX2lkXSk7XG4gICAgfVxuXG4gICAgYWRkSGVybygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhlcm8gPSBudWxsO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZXRhaWwnLCAnbmV3J10pO1xuICAgIH1cblxuICAgIGRlbGV0ZUhlcm8oaGVybzogSGVybywgZXZlbnQ6IGFueSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZVxuICAgICAgICAgICAgLmRlbGV0ZShoZXJvKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9lcyA9IHRoaXMuaGVyb2VzLmZpbHRlcihoID0+IGggIT09IGhlcm8pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSGVybyA9PT0gaGVybykgeyB0aGlzLnNlbGVjdGVkSGVybyA9IG51bGw7IH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTtcbiAgICB9XG59XG4iXX0=
