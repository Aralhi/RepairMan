/**
 * @author MoXun
 */
import { EventEmitter } from '@angular/core';
export declare class NzAlertComponent {
    _display: boolean;
    nzType: string;
    nzBanner: boolean;
    nzCloseable: boolean;
    nzDescription: string;
    nzShowIcon: boolean;
    nzCloseText: string;
    nzMessage: string;
    nzOnClose: EventEmitter<boolean>;
    readonly _classMap: {
        [x: string]: boolean;
    };
    closeAlert(): void;
    constructor();
}
