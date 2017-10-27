import { NgModule } from '@angular/core';
import { OverlayModule } from '../overlay/index';
import { FLOATER_SERVICE_PROVIDER } from './floater.service';
const /** @type {?} */ providers = [
    FLOATER_SERVICE_PROVIDER
];
export class FloaterModule {
}
FloaterModule.decorators = [
    { type: NgModule, args: [{
                imports: [OverlayModule],
                providers: providers
            },] },
];
/**
 * @nocollapse
 */
FloaterModule.ctorParameters = () => [];
function FloaterModule_tsickle_Closure_declarations() {
    /** @type {?} */
    FloaterModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    FloaterModule.ctorParameters;
}
export { FloaterOptions, FloaterProps } from './floater-props';
export { Floater } from './floater';
export { FloaterService } from './floater.service';
