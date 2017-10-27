import { Injectable, Inject, Optional, SkipSelf } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Floater } from './floater';
import { Overlay } from '../overlay/index';
Injectable();
export class FloaterService {
    /**
     * @param {?} _overlay
     * @param {?} _document
     */
    constructor(_overlay, _document) {
        this._overlay = _overlay;
        this._document = _document;
        // console.log('[FloaterService] constructed once.');
    }
    /**
     * @template T
     * @param {?} strategyType
     * @param {?} content
     * @param {?=} viewContainerRef
     * @param {?=} strategyOptions
     * @param {?=} options
     * @return {?}
     */
    create(strategyType, content, viewContainerRef, strategyOptions, options) {
        options = Object.assign(options || {}, {
            content: content,
            viewContainerRef: viewContainerRef,
            positionStrategyType: strategyType,
            positionStrategyOptions: strategyOptions
        });
        return new Floater(this._overlay, this._document, options);
    }
    /**
     * @template T
     * @param {?} content
     * @param {?=} viewContainerRef
     * @param {?=} strategyOptions
     * @param {?=} options
     * @return {?}
     */
    createConnected(content, viewContainerRef, strategyOptions, options) {
        return this.create('connected', content, viewContainerRef, strategyOptions, options);
    }
    /**
     * @template T
     * @param {?} content
     * @param {?=} viewContainerRef
     * @param {?=} strategyOptions
     * @param {?=} options
     * @return {?}
     */
    createFree(content, viewContainerRef, strategyOptions, options) {
        return this.create('free', content, viewContainerRef, strategyOptions, options);
    }
    /**
     * Persistently create/initialize a Component and append it's DOM to body(under overlay)
     * NOTE: the attaching operation is persistent, means that it is no methods to detach the component while attached (no relative resources can be released), SO take care of using it!
     * @template T
     * @param {?} component Component class
     * @param {?=} viewContainerRef Container reference that component will created and append to
     * @param {?=} injector Injector that will be used while creating component dynamically
     * @return {?} Instance of the component
     */
    persistAttachComponent(component, viewContainerRef, injector) {
        return this.createFree(component, viewContainerRef, null, {
            injector: injector,
            persist: true
        }).attach().getComponentInstance();
    }
}
/**
 * @nocollapse
 */
FloaterService.ctorParameters = () => [
    { type: Overlay, },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
function FloaterService_tsickle_Closure_declarations() {
    /**
     * @nocollapse
     * @type {?}
     */
    FloaterService.ctorParameters;
    /** @type {?} */
    FloaterService.prototype._overlay;
    /** @type {?} */
    FloaterService.prototype._document;
}
/**
 * @param {?} overlay
 * @param {?} doc
 * @param {?} floaterService
 * @return {?}
 */
export function FLOATER_SERVICE_PROVIDER_FACTORY(overlay, doc, floaterService) {
    return floaterService || new FloaterService(overlay, doc);
}
export const /** @type {?} */ FLOATER_SERVICE_PROVIDER = {
    provide: FloaterService,
    useFactory: FLOATER_SERVICE_PROVIDER_FACTORY,
    deps: [Overlay, DOCUMENT, [new Optional(), new SkipSelf(), FloaterService]]
};
