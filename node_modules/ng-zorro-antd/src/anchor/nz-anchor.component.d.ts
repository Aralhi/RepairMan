import { EventEmitter, Renderer2 } from '@angular/core';
import { NzScrollService } from "../core/scroll/nz-scroll.service";
import { NzAnchorLinkComponent } from "./nz-anchor-link.component";
export declare class NzAnchorComponent {
    private scrollSrv;
    private _renderer;
    private doc;
    private links;
    private scroll$;
    private target;
    private animating;
    private container;
    private ball;
    _top: number;
    _visible: boolean;
    nzTarget: Element;
    nzOffsetTop: number;
    nzBounds: number;
    nzScroll: EventEmitter<NzAnchorLinkComponent>;
    constructor(scrollSrv: NzScrollService, _renderer: Renderer2, doc: Document);
    ngOnInit(): void;
    private getTarget();
    private handleScroll();
    private removeListen();
    private registerScrollEvent();
    add(linkComp: NzAnchorLinkComponent): void;
    /** 设置滚动条至 `linkComp` 所处位置 */
    scrollTo(linkComp: NzAnchorLinkComponent): void;
    ngOnDestroy(): void;
}
