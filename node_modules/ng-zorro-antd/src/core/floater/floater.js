import { TemplateRef, Renderer2 } from '@angular/core';
import { OverlayState, OverlayOrigin, ConnectedPositionStrategy } from '../overlay/index';
import { TemplatePortal, ComponentPortal, ESCAPE } from '@angular/cdk';
import { FloaterProps, } from './floater-props';
/**
 * Floater object to manage overlay (Enhanced verion of ConnectedOverlayDirective)
 * NOTE: don't like ConnectedOverlayDirective, Floater has no dependencies with directive (such as Component, Directive ...)
 *  but this will means that you should destroy it and incidental resources manually using destroy() method!
 */
export class Floater {
    /**
     * @param {?} _overlay
     * @param {?} _renderer
     * @param {?} options
     */
    constructor(_overlay, _renderer, options) {
        this._overlay = _overlay;
        this._renderer = _renderer;
        this._stateAttached = false;
        this._stateDestroyed = false;
        this._props = new FloaterProps(options);
        const { content, viewContainerRef, injector } = this._props;
        if (content instanceof TemplateRef) {
            this._contentPortal = new TemplatePortal(content, viewContainerRef);
        }
        else if (typeof content === 'function') {
            this._contentPortal = new ComponentPortal(content, viewContainerRef, injector);
        }
        else {
            throw new Error('[Floater] Not support "content" type.');
        }
    }
    /**
     * @return {?}
     */
    get overlayRef() {
        return this._overlayRef;
    }
    /**
     * @return {?}
     */
    get attachedResult() {
        return this._attachedResult;
    }
    /**
     * @return {?}
     */
    get dir() {
        return this._props.dir ? this._props.dir.value : 'ltr';
    }
    /**
     * @return {?}
     */
    getComponentInstance() {
        if (!this._isCreatedByComponent()) {
            throw new Error(`Cant't get ComponentRef when created without ComponentType (Should fill the "content" option with value of ComponentType)`);
        }
        return ((this.attachedResult)).instance;
    }
    /**
     * @return {?}
     */
    attach() {
        if (!this._stateAttached) {
            this._stateAttached = true;
            this._attachOverlay();
        }
        return this;
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._stateAttached) {
            this._stateAttached = false;
            this._detachOverlay();
        }
        return this;
    }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._stateDestroyed) {
            this._stateDestroyed = true;
            this._destroyOverlay();
        }
        return this;
    }
    /**
     * @return {?}
     */
    _attachOverlay() {
        // console.log('[Floater] Attach overlay');
        const { hasBackdrop, backdropClick, attach, persist } = this._props;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        const /** @type {?} */ position = this._props.getPositionStrategy();
        if (position instanceof ConnectedPositionStrategy) {
            position.withDirection(this.dir);
        }
        this._overlayRef.getState().direction = this.dir;
        if (!persist) {
            this._initEscapeListener();
        }
        if (!this._overlayRef.hasAttached()) {
            this._attachedResult = this._overlayRef.attach(this._contentPortal);
            if (this._isCreatedByComponent()) {
                this._handleAttachedComponent(/** @type {?} */ (this._attachedResult));
            }
            if (attach) {
                attach.emit();
            }
        }
        if (hasBackdrop && backdropClick) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
                backdropClick.emit();
            });
        }
    }
    /**
     * @return {?}
     */
    _detachOverlay() {
        // console.log('[Floater] Detach overlay');
        const { detach } = this._props;
        if (this._overlayRef) {
            this._overlayRef.detach();
            if (detach) {
                detach.emit();
            }
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
        if (this._escapeListener) {
            this._escapeListener();
            this._escapeListener = null;
        }
    }
    /**
     * @return {?}
     */
    _destroyOverlay() {
        // console.log('[Floater] Destroy overlay');
        if (this._overlayRef) {
            this.overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
        if (this._escapeListener) {
            this._escapeListener();
        }
        this._props.destroy();
    }
    /**
     * @return {?}
     */
    _createOverlay() {
        this._overlayRef = this._overlay.create(this._buildConfig(), this._props.paneClass);
    }
    /**
     * @return {?}
     */
    _buildConfig() {
        const /** @type {?} */ overlayConfig = new OverlayState();
        const { width, height, minWidth, minHeight, hasBackdrop, backdropClass } = this._props;
        if (width || width === 0) {
            overlayConfig.width = width;
        }
        if (height || height === 0) {
            overlayConfig.height = height;
        }
        if (minWidth || minWidth === 0) {
            overlayConfig.minWidth = minWidth;
        }
        if (minHeight || minHeight === 0) {
            overlayConfig.minHeight = minHeight;
        }
        overlayConfig.hasBackdrop = hasBackdrop;
        if (backdropClass) {
            overlayConfig.backdropClass = backdropClass;
        }
        const /** @type {?} */ strategy = this._createPositionStrategy();
        if (strategy) {
            this._props.setPositionStrategy(strategy);
            overlayConfig.positionStrategy = strategy;
            // Use noop scroll strategy by default
            overlayConfig.scrollStrategy =
                this._props.scrollStrategy ? this._props.scrollStrategy : this._overlay.scrollStrategies.noop();
        }
        return overlayConfig;
    }
    /**
     * @return {?}
     */
    _createPositionStrategy() {
        const { positionStrategyType: strategyType, positionStrategyOptions: strategyOptions } = this._props;
        let /** @type {?} */ strategy = null;
        if (strategyType === 'connected') {
            const { positions, origin, offsetX, offsetY } = (strategyOptions);
            const /** @type {?} */ pos = positions[0];
            const /** @type {?} */ originPoint = { originX: pos.originX, originY: pos.originY };
            const /** @type {?} */ overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
            const /** @type {?} */ elementRef = origin instanceof OverlayOrigin ? origin.elementRef : origin;
            strategy = this._overlay.position()
                .connectedTo(elementRef, originPoint, overlayPoint)
                .withOffsetX(offsetX || 0)
                .withOffsetY(offsetY || 0);
            this._handlePositionChanges(strategy);
            if (!this._props.scrollStrategy) {
                this._props.scrollStrategy = this._overlay.scrollStrategies.reposition();
            }
        }
        else if (strategyType === 'free') {
            strategy = this._overlay.position().free();
        }
        return strategy;
    }
    /**
     * @param {?} strategy
     * @return {?}
     */
    _handlePositionChanges(strategy) {
        const { positionStrategyOptions: strategyOptions, positionChange } = this._props;
        const /** @type {?} */ positions = ((strategyOptions)).positions;
        for (let /** @type {?} */ i = 1; i < positions.length; i++) {
            strategy.withFallbackPosition({ originX: positions[i].originX, originY: positions[i].originY }, { overlayX: positions[i].overlayX, overlayY: positions[i].overlayY });
        }
        if (positionChange) {
            this._positionSubscription =
                strategy.onPositionChange.subscribe(pos => positionChange.emit(pos));
        }
    }
    /**
     * @return {?}
     */
    _isCreatedByComponent() {
        return this._contentPortal instanceof ComponentPortal;
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    _handleAttachedComponent(componentRef) {
        const /** @type {?} */ instance = componentRef.instance, /** @type {?} */ afterComponentCreated = this._props.afterComponentCreated;
        if (afterComponentCreated) {
            afterComponentCreated(instance);
        }
    }
    /**
     * @return {?}
     */
    _initEscapeListener() {
        const /** @type {?} */ listener = (event) => {
            if (event.keyCode === ESCAPE) {
                this._detachOverlay();
            }
        };
        if (this._renderer instanceof Renderer2) {
            this._escapeListener = this._renderer.listen('document', 'keydown', listener);
        }
        else if (this._renderer instanceof Document) {
            // console.log('[Floater/_initEscapeListener]use document', this._renderer);
            this._renderer.addEventListener('keydown', listener);
            this._escapeListener = () => {
                ((this._renderer)).removeEventListener('keydown', listener);
            };
        }
    }
}
function Floater_tsickle_Closure_declarations() {
    /** @type {?} */
    Floater.prototype._props;
    /** @type {?} */
    Floater.prototype._overlayRef;
    /** @type {?} */
    Floater.prototype._attachedResult;
    /** @type {?} */
    Floater.prototype._contentPortal;
    /** @type {?} */
    Floater.prototype._backdropSubscription;
    /** @type {?} */
    Floater.prototype._positionSubscription;
    /** @type {?} */
    Floater.prototype._escapeListener;
    /** @type {?} */
    Floater.prototype._stateAttached;
    /** @type {?} */
    Floater.prototype._stateDestroyed;
    /** @type {?} */
    Floater.prototype._overlay;
    /** @type {?} */
    Floater.prototype._renderer;
}
