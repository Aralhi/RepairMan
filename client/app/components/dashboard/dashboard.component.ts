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
    lessValue: number = 1;

    constructor(private router: Router,
        private materialService: MaterialService) {
    }

    valueChange(val) {
        this.materialService.findLessThan('count', val).subscribe(res => {
            if (res.status === 'success') {
                this.lessMaterials = res.result;
            }
        });
    }

    ngOnInit() {
        this.materialService.findLessThan('count', this.lessValue).subscribe(res => {
            if (res.status === 'success') {
                this.lessMaterials = res.result;
            }
        });
    }
}