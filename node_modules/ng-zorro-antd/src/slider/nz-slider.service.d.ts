export declare class NzSliderService {
    pauseEvent(e: any): void;
    getPrecision(num: any): number;
    cloneArray(arr: Array<any>): any[];
    isNotTouchEvent(e: TouchEvent): boolean;
    valueToOffset(min: any, max: any, value: number): number;
    correctNumLimit(num: any, min: any, max: any): any;
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param elem HTMLElement ref
     */
    getElementOffset(elem: HTMLElement): {
        top: number;
        left: number;
    };
}
