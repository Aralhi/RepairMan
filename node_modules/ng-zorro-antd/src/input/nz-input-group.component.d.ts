import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class NzInputGroupComponent implements OnInit {
    private _elementRef;
    private _render;
    _el: HTMLElement;
    _prefixCls: string;
    readonly _isLarge: boolean;
    readonly _isSmall: boolean;
    nzSize: string;
    nzCompact: boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngOnInit(): void;
}
