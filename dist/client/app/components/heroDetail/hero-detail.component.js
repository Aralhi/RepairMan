"use strict";
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
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
var core_1 = require("@angular/core");
var hero_1 = require("../../models/hero");
var router_1 = require("@angular/router");
var hero_service_1 = require("../../services/hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.newHero = false;
        this.navigated = false; // true if navigated here
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id === 'new') {
                _this.newHero = true;
                _this.hero = new hero_1.Hero();
            }
            else {
                _this.newHero = false;
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
        });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: './app/components/heroDetail/hero-detail.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlcm9EZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxzQ0FBdUQ7QUFDdkQsMENBQXVDO0FBQ3ZDLDBDQUF5RDtBQUN6RCw0REFBd0Q7QUFPeEQsSUFBYSxtQkFBbUI7SUFPNUIsNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFQakMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMseUJBQXlCO0lBTTVDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFjO1lBQ3JDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3FCQUN2QixJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVzthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2YsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO1lBQzdDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCO0lBQzNFLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdENZO0lBQVIsWUFBSyxFQUFFOzhCQUFPLFdBQUk7aURBQUM7QUFEWCxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLHdEQUF3RDtLQUN4RSxDQUFDO3FDQVUyQiwwQkFBVztRQUNqQix1QkFBYztHQVR4QixtQkFBbUIsQ0F1Qy9CO0FBdkNZLGtEQUFtQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9oZXJvRGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDAyLTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZXJvfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2hlcm9cIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIZXJvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2hlcm8uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWhlcm8tZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvaGVyb0RldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZXJvRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBoZXJvOiBIZXJvO1xuICAgIG5ld0hlcm8gPSBmYWxzZTtcbiAgICBlcnJvcjogYW55O1xuICAgIG5hdmlnYXRlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIG5hdmlnYXRlZCBoZXJlXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0hlcm8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3SGVybyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVybyhpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaGVybyA9PiB0aGlzLmhlcm8gPSBoZXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZVxuICAgICAgICAgICAgLnNhdmUodGhpcy5oZXJvKVxuICAgICAgICAgICAgLnRoZW4oaGVybyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvID0gaGVybzsgLy8gc2F2ZWQgaGVybywgdy8gaWQgaWYgbmV3XG4gICAgICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTsgLy8gVE9ETzogRGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxufSJdfQ==
