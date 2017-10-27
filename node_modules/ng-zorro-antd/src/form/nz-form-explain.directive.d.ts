import { OnDestroy, OnInit } from '@angular/core';
import { NzFormItemDirective } from './nz-form-item.directive';
export declare class NzFormExplainComponent implements OnDestroy, OnInit {
    private _nzFormItem;
    _nzFormExplain: boolean;
    constructor(_nzFormItem: NzFormItemDirective);
    ngOnDestroy(): any;
    ngOnInit(): void;
}
