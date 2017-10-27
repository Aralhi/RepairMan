import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NzRadioGroupComponent } from './nz-radio-group.component';
export declare class NzRadioComponent implements OnInit {
    private _elementRef;
    _renderer: Renderer2;
    _nzRadioGroup: NzRadioGroupComponent;
    _el: HTMLElement;
    _classMap: any;
    _value: string;
    _prefixCls: string;
    _innerPrefixCls: string;
    _inputPrefixCls: string;
    _checked: boolean;
    _focused: boolean;
    _disabled: boolean;
    nzChecked: boolean;
    nzValue: string;
    nzDisabled: boolean;
    onClick(e: any): void;
    nzFocus(): void;
    nzBlur(): void;
    setClassMap(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _nzRadioGroup: NzRadioGroupComponent);
    ngOnInit(): void;
}
