import { Renderer2, ElementRef } from '@angular/core';
import { AutoSizeType } from './nz-input.component';
export declare class NzInputDirectiveComponent {
    private _elementRef;
    private _render;
    size: string;
    nativeElement: HTMLElement;
    _readonly: boolean;
    _autosize: boolean | AutoSizeType;
    _disabled: boolean;
    nzSize: string;
    nzDisabled: boolean;
    nzReadonly: boolean;
    nzAutosize: string | boolean | AutoSizeType;
    _nzInput: boolean;
    readonly setLgClass: boolean;
    readonly setSmClass: boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
}
