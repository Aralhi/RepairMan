import { OnInit, OnDestroy, EventEmitter, AfterViewInit } from '@angular/core';
import { NzDropDownComponent } from './nz-dropdown.component';
export declare class NzDropDownButtonComponent extends NzDropDownComponent implements OnInit, OnDestroy, AfterViewInit {
    nzDisable: boolean;
    nzSize: string;
    nzType: string;
    content: any;
    nzClick: EventEmitter<{}>;
    _nzOrigin: any;
    _onVisibleChange: (visible: boolean) => void;
    /** rewrite afterViewInit hook */
    ngAfterViewInit(): void;
}
