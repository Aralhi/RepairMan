import { ComponentFactory, ApplicationRef, TemplateRef, ComponentFactoryResolver, ModuleWithComponentFactories } from '@angular/core';
import { NzModalComponent } from './nz-modal.component';
import { NzConfirmComponent } from './nz-confirm.component';
import { NzModalSubject } from './nz-modal-subject.service';
export interface ConfigInterface {
    type?: string;
    title?: any;
    content?: any;
    width?: string | number;
    zIndex?: number;
    iconType?: string;
    okText?: string;
    nzClass?: string;
    cancelText?: string;
    style?: any;
    class?: string;
    closable?: boolean;
    maskClosable?: boolean;
    wrapClassName?: string;
    footer?: TemplateRef<any> | boolean;
    showConfirmLoading?: boolean;
    onOk?: Function;
    onCancel?: Function;
    componentParams?: Object;
    moduleWithComponentFactories?: ModuleWithComponentFactories<any>;
}
export declare class NzModalService {
    private _appRef;
    private _cfr;
    _modalCompFactory: ComponentFactory<NzModalComponent>;
    _confirmCompFactory: ComponentFactory<NzConfirmComponent>;
    constructor(_appRef: ApplicationRef, _cfr: ComponentFactoryResolver);
    _initConfig(config: Object, options?: Object): Object;
    _getConfirmCb(fn?: Function, isShowConfirmLoading?: boolean): Function;
    _open(props: ConfigInterface, factory: ComponentFactory<any>): NzModalSubject;
    /**
     * Open modal dialog
     */
    open(config: ConfigInterface): NzModalSubject;
    /**
     * Open confirm dialog
     */
    _openConfirm(config: ConfigInterface): NzModalSubject;
    /**
     * Open info dialog
     */
    info(props: ConfigInterface): NzModalSubject;
    /**
     * Open success dialog
     */
    success(props: ConfigInterface): NzModalSubject;
    /**
     * Open error dialog
     */
    error(props: ConfigInterface): NzModalSubject;
    /**
     * Open warning dialog
     */
    warning(props: ConfigInterface): NzModalSubject;
    /**
     * Open confirm dialog
     */
    confirm(props: ConfigInterface): NzModalSubject;
}
