import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzCheckboxComponent implements OnInit, ControlValueAccessor {
    private _elementRef;
    private _render;
    _el: HTMLElement;
    _prefixCls: string;
    _innerPrefixCls: string;
    _inputPrefixCls: string;
    _checked: boolean;
    _focused: boolean;
    onChange: any;
    onTouched: any;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    readonly nzChecked: boolean;
    onClick(e: any): void;
    updateValue(value: any): void;
    nzFocus(): void;
    nzBlur(): void;
    readonly _classMap: {
        [x: string]: boolean;
    };
    constructor(_elementRef: ElementRef, _render: Renderer2);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
