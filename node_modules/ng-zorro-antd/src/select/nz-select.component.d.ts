/**
 * complex but work well
 * TODO: rebuild latter
 */
import { OnInit, AfterContentInit, AfterContentChecked, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
import { ControlValueAccessor } from '@angular/forms';
export declare class NzSelectComponent implements OnInit, AfterContentInit, AfterContentChecked, ControlValueAccessor {
    private _elementRef;
    private _renderer;
    _el: HTMLElement;
    _prefixCls: string;
    _classList: Array<string>;
    _dropDownClassMap: any;
    _dropDownPrefixCls: string;
    _selectionClassMap: any;
    _selectionPrefixCls: string;
    _size: string;
    _value: Array<string> | string;
    _placeholder: string;
    _notFoundContent: string;
    _isOpen: boolean;
    _disabled: boolean;
    _showSearch: boolean;
    _isTags: boolean;
    _searchText: string;
    _triggerWidth: number;
    _selectedOption: NzOptionComponent;
    _operatingMultipleOption: NzOptionComponent;
    _selectedOptions: Set<NzOptionComponent>;
    _options: Array<NzOptionComponent>;
    _cacheOptions: Array<NzOptionComponent>;
    _filterOptions: Array<NzOptionComponent>;
    _tagsOptions: Array<NzOptionComponent>;
    _activeFilterOption: NzOptionComponent;
    _isMultiInit: boolean;
    _dropDownPosition: 'top' | 'bottom';
    _isMultiple: boolean;
    _composing: boolean;
    _mode: any;
    _keepUnListOptions: boolean;
    _allowClear: boolean;
    onChange: any;
    onTouched: any;
    searchInputElementRef: any;
    trigger: ElementRef;
    dropdownUl: ElementRef;
    nzSearchChange: EventEmitter<any>;
    nzOpenChange: EventEmitter<any>;
    nzFilter: boolean;
    nzMaxMultiple: number;
    nzAllowClear: boolean | string;
    nzKeepUnListOptions: boolean | string;
    nzMode: any;
    nzMultiple: boolean;
    nzPlaceHolder: string;
    nzNotFoundContent: string;
    nzSize: string;
    nzShowSearch: boolean;
    nzTags: boolean;
    nzDisabled: boolean;
    nzOpen: boolean;
    /** new nz-option insert or new tags insert */
    addOption: (option: any) => void;
    /** nz-option remove or tags remove */
    removeOption(option: any): void;
    /** dropdown position changed */
    onPositionChange(position: any): void;
    compositionStart(): void;
    compositionEnd(): void;
    /** clear single selected option */
    clearSelect($event?: any): void;
    /** click dropdown option by user */
    clickOption(option: any, $event?: any): void;
    /** choose option */
    chooseOption(option: any, isUserClick?: boolean, $event?: any): void;
    updateWidth(element: any, text: any): void;
    /** determine if option in set */
    isInSet(set: any, option: any): NzOptionComponent;
    /** cancel select multiple option */
    unSelectMultipleOption: (option: any, $event?: any, emitChange?: boolean) => void;
    /** select multiple option */
    selectMultipleOption(option: any, $event?: any): void;
    /** emit multiple options */
    emitMultipleOptions(): void;
    /** update selected option when add remove option etc */
    updateSelectedOption(currentModelValue: any, triggerByNgModel?: boolean): void;
    forceUpdateSelectedOption(value: any): void;
    nzValue: string | Array<string>;
    clearAllSelectedOption(emitChange?: boolean): void;
    handleKeyEnterEvent(event: any): void;
    handleKeyBackspaceEvent(event: any): void;
    handleKeyDownEvent($event: MouseEvent): void;
    handleKeyUpEvent($event: MouseEvent): void;
    preOption(option: any, options: any): any;
    nextOption(option: any, options: any): any;
    clearSearchText(): void;
    updateFilterOption(updateActiveFilter?: boolean): void;
    onSearchChange(searchValue: any): void;
    onClick(e: any): void;
    onKeyDown(e: any): void;
    closeDropDown(): void;
    setClassMap(): void;
    setDropDownClassMap(): void;
    scrollToActive(): void;
    flushComponentState(): void;
    _setTriggerWidth(): void;
    _getTriggerRect(): ClientRect;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    private _updateValue(value, emitChange?);
}
