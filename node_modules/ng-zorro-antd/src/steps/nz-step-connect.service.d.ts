import { EventEmitter } from '@angular/core';
export declare class NzStepConnectService {
    lastElementSizeEvent: EventEmitter<{}>;
    currentEvent: EventEmitter<{}>;
    current: number;
    itemIndex: number;
    id: any;
    direction: string;
    directionEvent: EventEmitter<{}>;
    processDot: boolean;
    processDotEvent: EventEmitter<{}>;
    errorIndexObject: EventEmitter<{}>;
    errorIndex: string;
    constructor();
}
