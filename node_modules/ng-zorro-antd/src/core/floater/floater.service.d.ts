import { Injector, ViewContainerRef, Provider } from '@angular/core';
import { ComponentType } from '@angular/cdk';
import { Floater } from './floater';
import { FloaterOptions, FloaterContent, ConnectedPositionOptions, FreePositionOptions, PositionStrategyOptions, PositionStrategyType } from './floater-props';
import { Overlay } from '../overlay/index';
export declare class FloaterService {
    private _overlay;
    private _document;
    constructor(_overlay: Overlay, _document: Document);
    create<T>(strategyType: PositionStrategyType, content: FloaterContent<T>, viewContainerRef?: ViewContainerRef, strategyOptions?: PositionStrategyOptions, options?: FloaterOptions<T>): Floater<T>;
    createConnected<T>(content: FloaterContent<T>, viewContainerRef?: ViewContainerRef, strategyOptions?: ConnectedPositionOptions, options?: FloaterOptions<T>): Floater<T>;
    createFree<T>(content: FloaterContent<T>, viewContainerRef?: ViewContainerRef, strategyOptions?: FreePositionOptions, options?: FloaterOptions<T>): Floater<T>;
    /**
     * Persistently create/initialize a Component and append it's DOM to body(under overlay)
     * NOTE: the attaching operation is persistent, means that it is no methods to detach the component while attached (no relative resources can be released), SO take care of using it!
     * @param component Component class
     * @param viewContainerRef Container reference that component will created and append to
     * @param injector Injector that will be used while creating component dynamically
     * @return Instance of the component
     */
    persistAttachComponent<T>(component: ComponentType<T>, viewContainerRef?: ViewContainerRef, injector?: Injector): T;
}
export declare function FLOATER_SERVICE_PROVIDER_FACTORY(overlay: any, doc: any, floaterService: any): any;
export declare const FLOATER_SERVICE_PROVIDER: Provider;
