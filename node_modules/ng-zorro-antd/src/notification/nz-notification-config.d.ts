import { InjectionToken } from '@angular/core';
import { NzMessageConfig } from '../message/nz-message-config';
export declare class NzNotificationConfig extends NzMessageConfig {
    nzTop?: string;
    nzRight?: string;
}
export declare const NZ_NOTIFICATION_DEFAULT_CONFIG: InjectionToken<NzNotificationConfig>;
export declare const NZ_NOTIFICATION_CONFIG: InjectionToken<NzNotificationConfig>;
export declare const NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<NzNotificationConfig>;
    useValue: {
        nzTop: string;
        nzRight: string;
        nzDuration: number;
        nzMaxStack: number;
        nzPauseOnHover: boolean;
        nzAnimate: boolean;
    };
};
