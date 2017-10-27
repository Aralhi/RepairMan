import { OnInit } from '@angular/core';
import { NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
import { NzMessageConfig } from './nz-message-config';
export declare class NzMessageContainerComponent<Config extends NzMessageConfig> implements OnInit {
    messages: NzMessageDataFilled[];
    config: Config;
    constructor(defaultConfig: Config, config: Config);
    ngOnInit(): void;
    createMessage(message: NzMessageDataFilled): void;
    removeMessage(messageId: string): void;
    removeMessageAll(): void;
    protected _mergeMessageOptions(options: NzMessageDataOptions): NzMessageDataOptions;
}
