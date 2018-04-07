import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../../services/material.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    lessMaterials: any = [];
    pageSize: number = 10;

    constructor(private router: Router,
        private materialService: MaterialService) {
    }

    ngOnInit() {
        this.materialService.findLessThan('count', 11).subscribe(res => {
            if (res.status === 'success') {
                this.lessMaterials = res.result;
            }
        });
    }
}