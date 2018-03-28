import { Material } from './../../../models/material';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'material-detail',
  template: `
    <div class="row">
      <span class="common-label">名称:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.name"></nz-input>
      </div>
      <span class="common-label">编码:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.no"></nz-input>
      </div>
      <span class="common-label">进价:</span>
      <div class="col-md-2 mr-20">
        <nz-input-number style="width: 100%;" [(ngModel)]="material.inPrice" [nzMin]="1" [nzStep]="1"></nz-input-number>
      </div>
      <span class="common-label">售价:</span>
      <div class="col-md-2 mr-20">
        <nz-input-number style="width: 100%;" [(ngModel)]="material.outPrice" [nzMin]="1" [nzStep]="1"></nz-input-number>
      </div>
    </div>
    <div class="row">
      <span class="common-label">规格:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.guige"></nz-input>
      </div>
      <span class="common-label">单位:</span>
      <div class="col-md-2 mr-20">
        <nz-select style="width: 100%;" nzTags [nzPlaceHolder]="'选择单位'" [(ngModel)]="material.unit"
        [nzNotFoundContent]="'无法找到'" nzShowSearch>
        <nz-option
          *ngFor="let option of units"
          [nzLabel]="option"
          [nzValue]="option">
        </nz-option>
    </nz-select>
      </div>
      <span class="common-label">供应商:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.vendor"></nz-input>
      </div>
      <span class="common-label">备注:</span>
      <div class="col-md-2">
        <nz-input [(ngModel)]="material.remark"></nz-input>
      </div>
    </div>
  `
})
export class MaterialDetailComponent implements OnInit{
  @Input() material;
  @Output() materialChange: EventEmitter<Material> = new EventEmitter();
  units: any = ['个', '台', '条', '其他'];

  ngOnInit() {
    if (this.units.indexOf(this.material.unit) < 0) {
      this.units.push(this.material.unit);
    }
  }

  change() {
    this.materialChange.emit(this.material);
  }
}
