import { Component, Output, Input } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'ws-search',
  template: `
    <nz-input class="search-input" [(ngModel)]="searchText" [nzPlaceHolder]="'输入关键字搜索'"
      (keyup.enter)="search()" (keyup)="isKeyUpSearch&&search()"></nz-input>
    <span class="search-icon glyphicon glyphicon-remove" (click)="search()"></span>
    <span class="search-icon glyphicon glyphicon-search" (click)="search()"></span>
  `
})
export class SearchComponent {
  @Input() isKeyUpSearch: boolean = true;
  @Output() searchFn: EventEmitter<any>;
  searchText: string = '';

  search() {
    this.searchFn.emit(this.searchText);
  }
}
