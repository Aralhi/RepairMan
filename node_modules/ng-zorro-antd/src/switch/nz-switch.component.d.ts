import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzSwitchComponent implements OnInit, ControlValueAccessor {
    _prefixCls: string;
    _innerPrefixCls: string;
    _classMap: any;
    _size: string;
    _checked: boolean;
    _disabled: boolean;
    onChange: any;
    onTouched: any;
    nzSize: string;
    nzDisabled: boolean;
    onClick(e: any): void;
    updateValue(value: any): void;
    setClassMap(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
