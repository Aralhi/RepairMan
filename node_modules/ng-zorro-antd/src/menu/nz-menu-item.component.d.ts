import { AfterViewInit, ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
import { NzMenuComponent } from './nz-menu.component';
import { NzSubMenuComponent } from './nz-submenu.component';
export declare const PADDING_BASE = 24;
export declare class NzMenuItemComponent implements AfterViewInit {
    private _renderer;
    cd: ChangeDetectorRef;
    private nzMenuComponent;
    nzSubMenuComponent: NzSubMenuComponent;
    private hostElement;
    level: number;
    padding: any;
    isInDropDown: boolean;
    selected: boolean;
    nzDisable: boolean;
    nzSelected: boolean;
    /** clear all item selected status except this */
    _onClickItem(): void;
    /** define host class */
    readonly _isInDropDownClass: boolean;
    readonly _isNotInDropDownClass: boolean;
    readonly setDropDownDisableClass: boolean;
    readonly setMenuDisableClass: boolean;
    readonly setPaddingLeft: any;
    constructor(_renderer: Renderer2, cd: ChangeDetectorRef, nzMenuComponent: NzMenuComponent, nzSubMenuComponent: NzSubMenuComponent, hostElement: ElementRef);
    ngAfterViewInit(): void;
}
