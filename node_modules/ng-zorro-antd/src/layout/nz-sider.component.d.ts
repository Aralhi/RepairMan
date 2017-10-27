import { EventEmitter } from '@angular/core';
import { NzLayoutComponent } from './nz-layout.component';
export declare type NzBreakPoinit = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare class NzSiderComponent {
    private nzLayoutComponent;
    _dimensionMap: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
    _below: boolean;
    nzWidth: string;
    nzTrigger: boolean;
    nzCollapsedWidth: number;
    nzBreakpoint: NzBreakPoinit;
    nzCollapsed: boolean;
    _collapsible: boolean;
    nzCollapsible: boolean | string;
    nzCollapsedChange: EventEmitter<{}>;
    _nzLayoutSider: boolean;
    readonly setZeroClass: boolean;
    readonly setFlex: string;
    readonly setWidth: string | number;
    onWindowResize(e: any): void;
    toggleCollapse(): void;
    constructor(nzLayoutComponent: NzLayoutComponent);
    readonly _isZeroTrigger: boolean;
    readonly _isSiderTrgger: boolean;
}
