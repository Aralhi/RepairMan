import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzProgressComponent implements ControlValueAccessor, OnInit {
    _statusColorMap: {
        normal: string;
        exception: string;
        success: string;
    };
    _pathString: string;
    _pathStyle: {};
    _circleStyle: {};
    _percent: number;
    _hasFormat: boolean;
    _rawStatus: string;
    onChange: any;
    onTouched: any;
    nzType: string;
    nzStrokeWidth: number;
    nzWidth: number;
    nzShowInfo: boolean;
    nzStatus: string;
    _setFormat: any;
    _format: (percent: any) => string;
    updateCircleStatus(): void;
    constructor();
    writeValue(value: number): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngOnInit(): void;
}
