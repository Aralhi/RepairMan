import { Component, Output, Input, EventEmitter } from '@angular/core';

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
  ]
})
export class SearchComponent {
  @Input() isKeyUpSearch: boolean = true;
  @Output() searchFn: EventEmitter<string> = new EventEmitter();
  searchText: string = '';

  keyupSearch() {
    if (this.isKeyUpSearch) {
      this.searchFn.emit(this.searchText);
    }
  }

  search() {
    this.searchFn.emit(this.searchText);
  }

  removeSearch() {
    this.searchText = '';
    this.searchFn.emit(this.searchText);
  }
}
