import { EventEmitter } from '@angular/core';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    _prefix: string;
    _trigger: string;
    _hasBackdrop: boolean;
    _condition: boolean;
    nzContent: any;
    nzOkText: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzOnCancel: EventEmitter<any>;
    nzOnConfirm: EventEmitter<any>;
    nzOrigin: any;
    show(): void;
    onCancel(): void;
    onConfirm(): void;
}
