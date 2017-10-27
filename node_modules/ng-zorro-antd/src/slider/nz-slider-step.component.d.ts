import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class NzSliderStepComponent implements OnInit, OnChanges {
    nzLowerBound: number;
    nzUpperBound: number;
    nzPrefixCls: string;
    nzVertical: boolean;
    nzMarksArray: any[];
    nzIncluded: boolean;
    attrs: any;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    trackById(index: number, attr: any): any;
    togglePointActive(): void;
}
