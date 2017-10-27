import { EventEmitter } from '@angular/core';
export declare class NzRowExpandIconComponent {
    nzExpand: boolean;
    nzShowExpand: boolean;
    nzExpandChange: EventEmitter<{}>;
    readonly expanded: boolean;
    readonly collapsed: boolean;
    _expandIcon: boolean;
    onClick(): void;
    constructor();
}
