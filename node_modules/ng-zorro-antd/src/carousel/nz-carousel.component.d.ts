import { AfterViewInit, Renderer2, OnDestroy, ElementRef } from '@angular/core';
export declare class NzCarouselComponent implements AfterViewInit, OnDestroy {
    hostElement: ElementRef;
    private _renderer;
    activeIndex: number;
    transform: string;
    interval: any;
    slideContents: any;
    _slideContents: any;
    slickList: ElementRef;
    slickTrack: ElementRef;
    nzAutoPlay: boolean;
    nzDots: boolean;
    nzEffect: string;
    nzVertical: boolean;
    _nzCarousel: boolean;
    constructor(hostElement: ElementRef, _renderer: Renderer2);
    setActive(content: any, i: any): void;
    ngAfterViewInit(): void;
    renderContent(): void;
    createInterval(): void;
    clearInterval(): void;
    ngOnDestroy(): void;
}
