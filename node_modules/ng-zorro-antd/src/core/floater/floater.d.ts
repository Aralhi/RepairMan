import { ComponentRef, Renderer2 } from '@angular/core';
import { OverlayRef, Overlay } from '../overlay/index';
import { Direction } from '@angular/cdk';
import { FloaterOptions } from './floater-props';
/**
 * Floater object to manage overlay (Enhanced verion of ConnectedOverlayDirective)
 * NOTE: don't like ConnectedOverlayDirective, Floater has no dependencies with directive (such as Component, Directive ...)
 *  but this will means that you should destroy it and incidental resources manually using destroy() method!
 */
export declare class Floater<T> {
    private _overlay;
    private _renderer;
    private _props;
    private _overlayRef;
    private _attachedResult;
    private _contentPortal;
    private _backdropSubscription;
    private _positionSubscription;
    private _escapeListener;
    private _stateAttached;
    private _stateDestroyed;
    readonly overlayRef: OverlayRef;
    readonly attachedResult: Map<string, any> | ComponentRef<T>;
    readonly dir: Direction;
    constructor(_overlay: Overlay, _renderer: Renderer2 | Document, options: FloaterOptions<T>);
    getComponentInstance(): T;
    attach(): this;
    detach(): this;
    destroy(): this;
    private _attachOverlay();
    private _detachOverlay();
    private _destroyOverlay();
    private _createOverlay();
    private _buildConfig();
    private _createPositionStrategy();
    private _handlePositionChanges(strategy);
    private _isCreatedByComponent();
    private _handleAttachedComponent(componentRef);
    private _initEscapeListener();
}
