import { OnInit, AfterViewInit, ElementRef, Renderer2, EventEmitter } from '@angular/core';
export declare class NzTagComponent implements OnInit, AfterViewInit {
    private _elementRef;
    private _render;
    _prefixCls: string;
    _closed: boolean;
    /** Whether tag is closable */
    nzClosable: boolean;
    /** The tag color */
    nzColor: string;
    /** Event: emit before close */
    nzBeforeClose: EventEmitter<Event>;
    /** Event: emit after close */
    nzClose: EventEmitter<Event>;
    readonly _dataShow: boolean;
    readonly _backgroundColor: string;
    _afterClose(event: any): void;
    readonly _tagCls: any;
    readonly _textClass: string;
    _close(event: Event): void;
    _isPresetColor(color: string): boolean;
    constructor(_elementRef: ElementRef, _render: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
