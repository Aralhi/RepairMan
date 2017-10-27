import { ElementRef, AfterContentInit, Renderer2 } from '@angular/core';
export declare class NzSpinComponent implements AfterContentInit {
    private _elementRef;
    private _renderer;
    nzSpinning: boolean;
    _tip: string;
    nzTip: string;
    _ref: any;
    private readonly isNested;
    _el: HTMLElement;
    _size: string;
    nzSize: string;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngAfterContentInit(): void;
}
