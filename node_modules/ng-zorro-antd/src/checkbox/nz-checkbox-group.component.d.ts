import { OnInit, ElementRef, AfterContentInit, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzCheckboxGroupComponent implements OnInit, AfterContentInit, ControlValueAccessor {
    private _elementRef;
    private _render;
    _el: HTMLElement;
    _options: Array<any>;
    _prefixCls: string;
    onChange: any;
    onTouched: any;
    nzDisabled: boolean;
    nzType: string;
    _optionChange(): void;
    constructor(_elementRef: ElementRef, _render: Renderer);
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
