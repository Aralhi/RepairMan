import { OnDestroy, ComponentFactoryResolver, Injector } from '@angular/core';
export declare class NzRootModule implements OnDestroy {
    private styleHostComponent;
    constructor(_document: Document, injector: Injector, resolver: ComponentFactoryResolver);
    ngOnDestroy(): void;
}
