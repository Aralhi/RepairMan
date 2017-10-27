import { EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NzThDirective } from './nz-th.directive';
export declare class NzTableSortComponent implements OnInit {
    private nzThDirective;
    private _renderer;
    _value: any;
    nzValueChange: EventEmitter<any>;
    nzValue: any;
    _setValue(value: any): void;
    constructor(nzThDirective: NzThDirective, _renderer: Renderer2);
    ngOnInit(): void;
}
