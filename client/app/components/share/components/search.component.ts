import { Component, Output, Input, EventEmitter, forwardRef, OnInit, Renderer2, 
  ViewChild, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ws-search',
  template: `
    <div class="search-div">
      <input #filterInput class="ant-input search-input"
      (keyup.enter)="keyupEnter(filterInput.value)"
      (change)="inputChange(filterInput.value, $event)"
      (keyup)="inputChange(filterInput.value, $event)" type="text"/>
      <i class="btn-common search-btn anticon anticon-search" (click)="keyupEnter(filterInput.value)"></i>
    </div>
  `,
  // <i #clearIcon class="btn-common delete-btn anticon anticon-close-circle" (click)="clearText()"></i>
  styles: [
    `
    .search-div{
      float: right;
      width: 200px;
      margin-left: 20px;
      position: relative;
    }
    .btn-common{
      position: absolute;top: 7px;cursor: pointer;
    }
    .search-btn{
      right: 3px;
    }
    .delete-btn{
      right: 23px;
    }
    `
  ],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SearchComponent),
    }
  ]
})
export class SearchComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy{
  @Input() isKeyUpSearch: boolean = true;
  @Output() searchFn: EventEmitter<string> = new EventEmitter();
  @ViewChild('filterInput') filterInputElement: ElementRef;
  @ViewChild('clearIcon') clearIconElement: ElementRef;
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;
  private subscription: Subscription;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
  }

  writeValue(value: any = ''): void {
    this.filterInputElement.nativeElement && this.renderer2.setValue(this.filterInputElement.nativeElement, value);
    this.renderClearIcon();
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  clearText() {
    this.renderer2.setValue(this.filterInputElement.nativeElement, '');
    this.searchFn.emit('');
    this.renderClearIcon();
  }

  inputChange(value, event?) {
    this.renderClearIcon();
  }

  registerFilterChange() {
    this.subscription = this.filterInputElement.nativeElement && Observable.fromEvent(this.filterInputElement.nativeElement, 'input')
      .map((e: HTMLSelectElement) => {
        return e.target.value;
      })
      .filter(term => true)
      .debounceTime(300)
      .subscribe(value => {
        this.onChange(value);
        if (this.isKeyUpSearch) {
          this.searchFn.emit(value);
        }
      });
  }

  keyupEnter(value) {
    this.searchFn.emit(value);
  }

  search() {
    this.searchFn.emit(this.filterInputElement.nativeElement.value);
  }

  ngAfterViewInit() {
    this.registerFilterChange();
    this.renderClearIcon();
  }

  renderClearIcon() {
    if (this.filterInputElement.nativeElement.value && this.clearIconElement) {
      this.renderer2.setStyle(this.clearIconElement.nativeElement, 'display', 'block');
    } else if (this.clearIconElement) {
      this.renderer2.setStyle(this.clearIconElement.nativeElement, 'display', 'none');
    }
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
