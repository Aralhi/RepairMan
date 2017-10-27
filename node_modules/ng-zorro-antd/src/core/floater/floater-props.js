import { EventEmitter, TemplateRef } from '@angular/core';
import { ConnectionPositionPair } from '../overlay/index';
/**
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
// Default set of positions for the overlay. Follows the behavior of a dropdown
const /** @type {?} */ defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
];
export class FloaterOptions {
    constructor() {
        // ---------------------------------------------------------
        // | Configurations
        // ---------------------------------------------------------
        // Current position strategy
        this.positionStrategyType = 'connected';
        // Whether keep overlay existing except call detach() or destroy() manually
        this.persist = false;
        // ---------------------------------------------------------
        // | Emitters
        // ---------------------------------------------------------
        // Event emitted when the backdrop is clicked
        this.backdropClick = new EventEmitter();
        // Event emitted when the position has changed
        this.positionChange = new EventEmitter();
        // Event emitted when the overlay has been attached
        this.attach = new EventEmitter();
        // Event emitted when the overlay has been detached
        this.detach = new EventEmitter();
    }
}
function FloaterOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FloaterOptions.prototype.positionStrategyType;
    /** @type {?} */
    FloaterOptions.prototype.positionStrategyOptions;
    /** @type {?} */
    FloaterOptions.prototype.dir;
    /** @type {?} */
    FloaterOptions.prototype.width;
    /** @type {?} */
    FloaterOptions.prototype.height;
    /** @type {?} */
    FloaterOptions.prototype.minWidth;
    /** @type {?} */
    FloaterOptions.prototype.minHeight;
    /** @type {?} */
    FloaterOptions.prototype.backdropClass;
    /** @type {?} */
    FloaterOptions.prototype.paneClass;
    /** @type {?} */
    FloaterOptions.prototype.scrollStrategy;
    /** @type {?} */
    FloaterOptions.prototype.hasBackdrop;
    /** @type {?} */
    FloaterOptions.prototype.content;
    /** @type {?} */
    FloaterOptions.prototype.viewContainerRef;
    /** @type {?} */
    FloaterOptions.prototype.injector;
    /** @type {?} */
    FloaterOptions.prototype.afterComponentCreated;
    /** @type {?} */
    FloaterOptions.prototype.persist;
    /** @type {?} */
    FloaterOptions.prototype.backdropClick;
    /** @type {?} */
    FloaterOptions.prototype.positionChange;
    /** @type {?} */
    FloaterOptions.prototype.attach;
    /** @type {?} */
    FloaterOptions.prototype.detach;
    /** @type {?} */
    FloaterOptions.prototype.onBackdropClick;
    /** @type {?} */
    FloaterOptions.prototype.onPositionChange;
    /** @type {?} */
    FloaterOptions.prototype.onAttach;
    /** @type {?} */
    FloaterOptions.prototype.onDetach;
}
export class FloaterProps extends FloaterOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        super();
        this._hasBackdrop = false;
        this._emitterSubscriptions = [];
        // Validating
        this._validateOptions(options);
        // Merge options
        Object.assign(this, options);
        // Default values
        this._initDefaultOptions();
        // Event listeners
        this._initEventListeners();
    }
    /**
     * @return {?}
     */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) {
        this._hasBackdrop = coerceBooleanProperty(value);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    _validateOptions(options) {
        if (!options.content) {
            throw new Error('[FloaterOptions] "content" is required.');
        }
        if (options.content instanceof TemplateRef && !options.viewContainerRef) {
            throw new Error('[FloaterOptions] "viewContainerRef" is required for "content" of TemplateRef.');
        }
        if (options.positionStrategyType === 'connected' && !options.positionStrategyOptions) {
            throw new Error('[FloaterOptions] "positionStrategyOptions" can\'t be empty when position strategy type is "connected".');
        }
    }
    /**
     * @return {?}
     */
    _initDefaultOptions() {
        const /** @type {?} */ strategyOptions = (this.positionStrategyOptions);
        if (this.positionStrategyType === 'connected') {
            if (!strategyOptions.positions || !strategyOptions.positions.length) {
                strategyOptions.positions = defaultPositionList;
            }
        }
    }
    /**
     * @return {?}
     */
    _initEventListeners() {
        const /** @type {?} */ subscriptions = this._emitterSubscriptions;
        if (this.onBackdropClick) {
            subscriptions.push(this.backdropClick.subscribe(this.onBackdropClick));
        }
        if (this.onPositionChange) {
            subscriptions.push(this.positionChange.subscribe(this.onPositionChange));
        }
        if (this.onAttach) {
            subscriptions.push(this.attach.subscribe(this.onAttach));
        }
        if (this.onDetach) {
            subscriptions.push(this.detach.subscribe(this.onDetach));
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPositionStrategy(position) {
        this._position = position;
    }
    /**
     * @return {?}
     */
    getPositionStrategy() {
        return this._position;
    }
    /**
     * @return {?}
     */
    destroy() {
        this._emitterSubscriptions.forEach(subscription => subscription.unsubscribe());
        this._emitterSubscriptions = null;
    }
}
function FloaterProps_tsickle_Closure_declarations() {
    /** @type {?} */
    FloaterProps.prototype._hasBackdrop;
    /** @type {?} */
    FloaterProps.prototype._position;
    /** @type {?} */
    FloaterProps.prototype._emitterSubscriptions;
}
