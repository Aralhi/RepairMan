import { ElementRef, AfterViewInit, EventEmitter, ChangeDetectorRef, TemplateRef, OnInit, QueryList } from '@angular/core';
import { NzThDirective } from './nz-th.directive';
export declare class NzTableComponent implements AfterViewInit, OnInit {
    private _elementRef;
    private _cd;
    /** public data for ngFor tr */
    data: any[];
    _scroll: any;
    _el: HTMLElement;
    _headerBottomStyle: any;
    _current: number;
    _total: number;
    _pageSize: number;
    _dataSet: any[];
    _isInit: boolean;
    _isAjax: boolean;
    ths: any[];
    nzPageSizeChange: EventEmitter<any>;
    nzPageIndexChange: EventEmitter<any>;
    nzDataChange: EventEmitter<any>;
    nzPageIndexChangeClick: EventEmitter<any>;
    nzBordered: boolean;
    nzSize: string;
    nzCustomNoResult: boolean;
    nzIsPagination: boolean;
    nzLoading: boolean;
    nzShowSizeChanger: boolean;
    nzShowQuickJumper: boolean;
    nzShowTotal: boolean;
    nzShowFooter: boolean;
    nzShowTitle: boolean;
    nzIsPageIndexReset: boolean;
    fixedHeader: TemplateRef<any>;
    setThs: QueryList<NzThDirective>;
    nzScroll: any;
    /** async data */
    nzAjaxData: any[];
    /** sync data */
    nzDataSource: any[];
    nzPageIndex: number;
    pageChangeClick(value: any): void;
    nzPageSize: number;
    nzTotal: number;
    _generateData(forceRefresh?: boolean): void;
    ngOnInit(): void;
    constructor(_elementRef: ElementRef, _cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
