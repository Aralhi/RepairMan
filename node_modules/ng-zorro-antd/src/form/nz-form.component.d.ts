import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class NzFormComponent implements OnInit {
    private _elementRef;
    private _renderer;
    _classList: Array<string>;
    _el: HTMLElement;
    _prefixCls: string;
    /**  @deprecated Use `nzLayout` instead. */
    nzType: string;
    nzLayout: any;
    setClassMap(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
}
