import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class NzSliderMarksComponent implements OnInit, OnChanges {
    nzLowerBound: number;
    nzUpperBound: number;
    nzClassName: string;
    nzVertical: boolean;
    nzMarksArray: MarksArray;
    nzMin: number;
    nzMax: number;
    nzIncluded: boolean;
    attrs: any;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    trackById(index: number, attr: any): any;
    togglePointActive(): void;
}
export declare type Mark = string | {
    style: Object;
    label: string;
};
export declare class Marks {
    number: Mark;
}
export declare class MarksArray extends Array<any> {
    [index: number]: {
        value: number;
        offset: number;
        config: Mark;
    };
}
