import { Renderer2, ElementRef, NgZone } from '@angular/core';
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare class NzTabsInkBarDirective {
    private _renderer;
    private _elementRef;
    private _ngZone;
    _nzTabsInkBar: boolean;
    nzAnimated: boolean;
    nzPositionMode: NzTabPositionMode;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    show(): void;
    setDisplay(value: any): void;
    hide(): void;
    _getLeftPosition(element: HTMLElement): string;
    _getElementWidth(element: HTMLElement): string;
    _getTopPosition(element: HTMLElement): string;
    _getElementHeight(element: HTMLElement): string;
}
