import { TemplateRef, ElementRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export declare class NzAnchorLinkComponent {
    el: ElementRef;
    private _anchorComp;
    nzHref: string;
    nzTitle: string;
    nzTemplate: TemplateRef<any>;
    _nzAnchorLink: boolean;
    active: boolean;
    _onClick(): void;
    constructor(el: ElementRef, _anchorComp: NzAnchorComponent);
    goToClick(e: Event): void;
}
