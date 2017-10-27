import { OnInit, EventEmitter, Renderer2, OnDestroy, ElementRef } from '@angular/core';
import { NzScrollService } from "../core/scroll/nz-scroll.service";
export declare class NzAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private _el;
    private _renderer;
    private scroll$;
    private scrollWinInTarget$;
    private target;
    private wrap;
    private fixed;
    private orgOffset;
    nzTarget: Element;
    nzOffsetTop: number;
    nzOffsetBottom: number;
    nzChange: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, _el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    private getTarget();
    private reCalculate();
    private process();
    private removeListen();
    private registerScrollEvent();
    ngOnDestroy(): void;
}
