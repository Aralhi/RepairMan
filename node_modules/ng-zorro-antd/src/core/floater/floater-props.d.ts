import { ElementRef, EventEmitter, TemplateRef, ViewContainerRef, Injector } from '@angular/core';
import { OverlayOrigin, ConnectionPositionPair, PositionStrategy, ConnectedOverlayPositionChange, ScrollStrategy } from '../overlay/index';
import { ComponentType, Directionality } from '@angular/cdk';
export declare type FloaterContent<T> = TemplateRef<T> | ComponentType<T>;
export declare type PositionStrategyType = 'connected' | 'free';
export declare type PositionStrategyOptions = ConnectedPositionOptions | FreePositionOptions;
export declare type FloaterOrigin = OverlayOrigin | ElementRef;
export interface ConnectedPositionOptions {
    origin: FloaterOrigin;
    positions?: ConnectionPositionPair[];
    offsetX?: number;
    offsetY?: number;
}
export interface FreePositionOptions {
    [index: string]: any;
}
export declare class FloaterOptions<T> {
    positionStrategyType?: PositionStrategyType;
    positionStrategyOptions?: PositionStrategyOptions;
    dir?: Directionality;
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    backdropClass?: string;
    paneClass?: string;
    scrollStrategy?: ScrollStrategy;
    hasBackdrop?: boolean;
    content?: FloaterContent<T>;
    viewContainerRef?: ViewContainerRef;
    injector?: Injector;
    afterComponentCreated?: (instance: T) => void;
    persist?: boolean;
    backdropClick?: EventEmitter<void>;
    positionChange?: EventEmitter<ConnectedOverlayPositionChange>;
    attach?: EventEmitter<void>;
    detach?: EventEmitter<void>;
    onBackdropClick?: () => void;
    onPositionChange?: (change: ConnectedOverlayPositionChange) => void;
    onAttach?: () => void;
    onDetach?: () => void;
}
export declare class FloaterProps<T> extends FloaterOptions<T> {
    private _hasBackdrop;
    private _position;
    private _emitterSubscriptions;
    hasBackdrop: any;
    constructor(options: FloaterOptions<T>);
    private _validateOptions(options);
    private _initDefaultOptions();
    private _initEventListeners();
    setPositionStrategy(position: PositionStrategy): void;
    getPositionStrategy(): PositionStrategy;
    destroy(): void;
}
