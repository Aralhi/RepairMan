import { Component, Output, Input, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ws-search',
  template: `
    <div class="search-div">
      <nz-input class="search-input" [(ngModel)]="searchText" [nzPlaceHolder]="'输入关键字搜索'" (keyup)="keyupSearch()"></nz-input>
      <i class="btn-common search-btn anticon anticon-search" style="" (click)="search()"></i>
      <i class="btn-common delete-btn anticon anticon-close-circle" *ngIf="searchText" (click)="removeSearch()"></i>
    </div>
  `,
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
  providers    : [
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent)
    }
  ]
})
export class SearchComponent implements ControlValueAccessor{
  @Input() isKeyUpSearch: boolean = true;
  @Output() searchFn: EventEmitter<string> = new EventEmitter();
  _searchText: string = '';
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input()
  get nzChecked(): string {
    return this._searchText;
  }

  writeValue(value: any): void {
    this._searchText = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  keyupSearch() {
    if (this.isKeyUpSearch) {
      this.searchFn.emit(this._searchText);
    }
  }

  search() {
    this.searchFn.emit(this._searchText);
  }

  removeSearch() {
    this._searchText = '';
    this.searchFn.emit(this._searchText);
  }
}
