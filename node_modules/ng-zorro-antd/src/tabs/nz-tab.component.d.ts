import { NzTabSetComponent } from './nz-tabset.component';
import { EventEmitter, TemplateRef, OnDestroy, OnInit } from '@angular/core';
export declare class NzTabComponent implements OnDestroy, OnInit {
    private nzTabSetComponent;
    position: number | null;
    origin: number | null;
    disabled: boolean;
    nzDisabled: any;
    nzSelect: EventEmitter<{}>;
    nzClick: EventEmitter<{}>;
    nzDeselect: EventEmitter<{}>;
    _tabHeading: TemplateRef<any>;
    _nzTabsTabpane: boolean;
    _content: TemplateRef<any>;
    readonly content: TemplateRef<any> | null;
    constructor(nzTabSetComponent: NzTabSetComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
