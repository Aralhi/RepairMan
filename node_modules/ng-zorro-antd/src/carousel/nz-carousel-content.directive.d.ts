import { ElementRef } from '@angular/core';
export declare class NzCarouselContentDirective {
    private _el;
    width: number;
    isActive: boolean;
    left: any;
    top: any;
    fadeMode: boolean;
    nativeElement: HTMLElement;
    _nzSlickSlide: boolean;
    readonly setActiveClass: boolean;
    readonly setWidth: number;
    readonly setLeft: any;
    readonly setTop: any;
    readonly setPosition: string;
    readonly setOpacity: number;
    constructor(_el: ElementRef);
}
