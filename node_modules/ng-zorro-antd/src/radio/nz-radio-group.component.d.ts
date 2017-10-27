import { OnInit, ElementRef, AfterContentInit, Renderer } from '@angular/core';
import { NzRadioComponent } from './nz-radio.component';
import { NzRadioButtonComponent } from './nz-radio-button.component';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzRadioGroupComponent implements OnInit, AfterContentInit, ControlValueAccessor {
    private _elementRef;
    private _render;
    _el: HTMLElement;
    _value: string;
    _size: string;
    _prefixCls: string;
    onChange: any;
    onTouched: any;
    radios: (NzRadioComponent | NzRadioButtonComponent)[];
    nzSize: string;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    addRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    selectRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    updateValue(value: any): void;
    constructor(_elementRef: ElementRef, _render: Renderer);
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
}
