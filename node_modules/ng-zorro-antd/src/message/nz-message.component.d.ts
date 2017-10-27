import { OnInit, OnDestroy } from '@angular/core';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageConfig } from './nz-message-config';
export declare class NzMessageComponent implements OnInit, OnDestroy {
    private _messageContainer;
    nzMessage: NzMessageDataFilled;
    nzIndex: number;
    protected _options: NzMessageDataOptions;
    private _autoErase;
    private _eraseTimer;
    private _eraseTimingStart;
    private _eraseTTL;
    constructor(_messageContainer: NzMessageContainerComponent<NzMessageConfig>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEnter(): void;
    onLeave(): void;
    protected _destroy(): void;
    private _initErase();
    private _updateTTL();
    private _startEraseTimeout();
    private _clearEraseTimeout();
}
