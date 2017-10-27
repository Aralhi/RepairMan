import { EventEmitter } from '@angular/core';
export interface Position {
    x: number;
    y: number;
}
export declare class NzGlobalMonitorService {
    counter: number;
    lastClickPos: Position;
    _navItemSource: EventEmitter<any>;
    getGlobalCount(): number;
    setDocumentOverflowHidden(status: Boolean): void;
    _observeGlobalEvents(): void;
    constructor();
}
declare const _default: NzGlobalMonitorService;
export default _default;
