import { Injectable, Inject, SkipSelf, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
const /** @type {?} */ availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    let /** @type {?} */ lastTime = 0;
    return function (callback) {
        const /** @type {?} */ currTime = new Date().getTime();
        const /** @type {?} */ timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const /** @type {?} */ id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => { };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    const /** @type {?} */ prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
        : requestAnimationFramePolyfill();
}
const /** @type {?} */ reqAnimFrame = getRequestAnimationFrame();
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    const /** @type {?} */ cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    }
    else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
}
export class NzScrollService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            ((el)).scrollTop = topValue;
        }
    }
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        let /** @type {?} */ ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        const /** @type {?} */ rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const /** @type {?} */ doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    getScroll(el, top = true) {
        if (!el)
            el = window;
        const /** @type {?} */ prop = top ? 'pageYOffset' : 'pageXOffset';
        const /** @type {?} */ method = top ? 'scrollTop' : 'scrollLeft';
        const /** @type {?} */ isWindow = el === window;
        let /** @type {?} */ ret = isWindow ? el[prop] : el[method];
        if (isWindow && typeof ret !== 'number')
            ret = this.doc.documentElement[method];
        return ret;
    }
    /**
     * 使用动画形式将 `el` 滚动至某位置
    
    \@param {(Element | Window)} containerEl 容器，默认 `window`
    \@param {number} [targetTopValue=0] 滚动至目标 `top` 值，默认：0，相当于顶部
    \@param {Function} [easing] 动作算法，默认：`easeInOutCubic`
    \@param {Function} [callback] 动画结束后回调
     * @param {?} containerEl
     * @param {?=} targetTopValue
     * @param {?=} easing
     * @param {?=} callback
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        if (!containerEl)
            containerEl = window;
        const /** @type {?} */ scrollTop = this.getScroll(containerEl);
        const /** @type {?} */ startTime = Date.now();
        const /** @type {?} */ frameFunc = () => {
            const /** @type {?} */ timestamp = Date.now();
            const /** @type {?} */ time = timestamp - startTime;
            this.setScrollTop(containerEl, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
NzScrollService.ctorParameters = () => [
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NzScrollService.ctorParameters;
    /** @type {?} */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
export const /** @type {?} */ SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
