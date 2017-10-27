import { ElementRef, EventEmitter } from '@angular/core';
export declare class NzPaginationComponent {
    private _elementRef;
    _el: HTMLElement;
    _current: number;
    _total: number;
    _pageSize: number;
    _firstIndex: number;
    _lastIndex: number;
    _pages: any[];
    _options: number[];
    _showSizeChanger: boolean;
    _showQuickJumper: boolean;
    _showTotal: boolean;
    _simple: boolean;
    nzShowSizeChanger: boolean | string;
    nzShowQuickJumper: boolean | string;
    nzShowTotal: boolean | string;
    nzSimple: boolean | string;
    nzSize: string;
    nzPageSizeChange: EventEmitter<number>;
    nzPageIndexChange: EventEmitter<number>;
    nzPageIndexClickChange: EventEmitter<number>;
    _jumpBefore(pageSize: any): void;
    _jumpAfter(pageSize: any): void;
    nzPageIndex: number;
    nzPageSize: number;
    nzTotal: number;
    _pageSizeChange($event: any): void;
    _nzPageIndexChange($event: any): void;
    /** generate indexes list */
    _buildIndexes(): void;
    _jumpPage(index: any): void;
    readonly _isLastIndex: boolean;
    readonly _isFirstIndex: boolean;
    readonly _roundPageSize: number;
    constructor(_elementRef: ElementRef);
}
