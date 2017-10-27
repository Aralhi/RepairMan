import { ElementRef } from '@angular/core';
import { NzCollapsesetComponent } from './nz-collapseset.component';
export declare class NzCollapseComponent {
    private _collapseSet;
    private _elementRef;
    _el: any;
    _active: boolean;
    _nzCollapseItem: boolean;
    nzTitle: string;
    nzDisabled: boolean;
    nzActive: boolean;
    clickHeader($event: any): void;
    constructor(_collapseSet: NzCollapsesetComponent, _elementRef: ElementRef);
}
