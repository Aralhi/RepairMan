import { OnInit, TemplateRef } from '@angular/core';
export declare class NzBadgeComponent implements OnInit {
    _showZero: boolean;
    count: number;
    maxNumberArray: any;
    countArray: any[];
    countSingleArray: number[];
    content: TemplateRef<any>;
    _nzBadge: boolean;
    readonly setNoWrapper: boolean;
    nzOverflowCount: number;
    nzShowZero: boolean | string;
    nzDot: boolean;
    nzText: string;
    nzStyle: any;
    nzStatus: string;
    nzCount: number;
    constructor();
    ngOnInit(): void;
}
