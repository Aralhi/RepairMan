import { InjectionToken } from '@angular/core';
export declare class NzMessageConfig {
    nzDuration?: number;
    nzPauseOnHover?: boolean;
    nzAnimate?: boolean;
    nzMaxStack?: number;
}
export declare const NZ_MESSAGE_DEFAULT_CONFIG: InjectionToken<NzMessageConfig>;
export declare const NZ_MESSAGE_CONFIG: InjectionToken<NzMessageConfig>;
export declare const NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<NzMessageConfig>;
    useValue: {
        nzDuration: number;
        nzAnimate: boolean;
        nzPauseOnHover: boolean;
        nzMaxStack: number;
    };
};
