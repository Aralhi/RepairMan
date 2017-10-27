import { Provider } from '@angular/core';
export declare class NzScrollService {
    private doc;
    constructor(doc: Document);
    /** 设置 `el` 滚动条位置 */
    setScrollTop(el: Element | Window, topValue?: number): void;
    /** 获取 `el` 相对于视窗距离 */
    getOffset(el: Element): {
        top: number;
        left: number;
    };
    /** 获取 `el` 滚动条位置 */
    getScroll(el?: Element | Window, top?: boolean): number;
    /**
   * 使用动画形式将 `el` 滚动至某位置
   *
   * @param {(Element | Window)} containerEl 容器，默认 `window`
   * @param {number} [targetTopValue=0] 滚动至目标 `top` 值，默认：0，相当于顶部
   * @param {Function} [easing] 动作算法，默认：`easeInOutCubic`
   * @param {Function} [callback] 动画结束后回调
   */
    scrollTo(containerEl: Element | Window, targetTopValue?: number, easing?: Function, callback?: Function): void;
}
export declare function SCROLL_SERVICE_PROVIDER_FACTORY(doc: any, scrollService: any): any;
export declare const SCROLL_SERVICE_PROVIDER: Provider;
