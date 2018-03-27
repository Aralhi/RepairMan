import { Material } from './../../../models/material';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'material-detail',
  template: `
    <div class="row">
      <span class="common-label">名称:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="material.name" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">编码:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="material.no" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">规格:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="material.guige" (ngModelChange)="change()"></nz-input>
      </div>
    </div>
    <div class="row">
      <span class="common-label">单位:</span>
      <div class="col-md-3 mr-20">
        <nz-select style="width: 100%;" [(ngModel)]="material.unit" [nzPlaceHolder]="'选择单位'" nzAllowClear>
          <nz-option
            *ngFor="let option of units"
            [nzLabel]="option"
            [nzValue]="option">
          </nz-option>
        </nz-select>
      </div>
      <span class="common-label">供应商:</span>
      <div class="col-md-3 mr-20">
        <nz-input [(ngModel)]="material.vendor" (ngModelChange)="change()"></nz-input>
      </div>
      <span class="common-label">备注:</span>
      <div class="col-md-3">
        <nz-input [(ngModel)]="material.remark" (ngModelChange)="change()"></nz-input>
      </div>
    </div>
  `
})
export class MaterialDetailComponent {
  @Input() material;
  @Output() materialChange: EventEmitter<Material> = new EventEmitter();
  units: any = ['个', '台', '条', '其他'];


  change() {
    this.materialChange.emit(this.material);
  }
}
