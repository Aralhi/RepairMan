import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../../models/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        // this.heroService.getHeroes()
        //     .subscribe(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
}