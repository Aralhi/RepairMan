import { Type } from '@angular/core';
import { FloaterService } from '../core/floater/index';
import { NzMessageConfig } from './nz-message-config';
import { NzMessageData, NzMessageDataFilled, NzMessageDataOptions } from './nz-message.definitions';
import { NzMessageContainerComponent } from './nz-message-container.component';
export declare class NzMessageBaseService<ContainerClass extends NzMessageContainerComponent<any>, MessageData> {
    private _idPrefix;
    protected _counter: number;
    protected _container: ContainerClass;
    constructor(floaterService: FloaterService, containerClass: Type<ContainerClass>, _idPrefix?: string);
    remove(messageId?: string): void;
    createMessage(message: MessageData, options?: NzMessageDataOptions): NzMessageDataFilled;
    protected _generateMessageId(): string;
}
export declare class NzMessageService extends NzMessageBaseService<NzMessageContainerComponent<NzMessageConfig>, NzMessageData> {
    constructor(floaterService: FloaterService);
    success(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    error(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    info(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    warning(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    loading(content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    create(type: string, content: string, options?: NzMessageDataOptions): NzMessageDataFilled;
    html(html: string, options?: NzMessageDataOptions): NzMessageDataFilled;
}
