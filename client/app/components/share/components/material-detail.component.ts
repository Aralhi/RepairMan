import { Material } from './../../../models/material';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { VendorService } from '../../../services/vendor.service';
@Component({
  selector: 'material-detail',
  template: `
    <div class="row">
      <span class="common-label">名称:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.name"></nz-input>
      </div>
      <span class="common-label">车型:</span>
      <div class="col-md-2 mr-20">
        <nz-input [(ngModel)]="material.carType"></nz-input>
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
      <span class="common-label">库存:</span>
      <div class="col-md-2 mr-20">
      <nz-input-number style="width: 100%;" [(ngModel)]="material.count" [nzMin]="0" [nzStep]="10"></nz-input-number>
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
      <nz-select style="width: 100%;" zAllowClear [nzPlaceHolder]="'选择供应商'"
        [(ngModel)]="material.vendor"
        [nzShowSearch]="true">
        <nz-option
          *ngFor="let option of vendors"
          [nzLabel]="option.name"
          [nzValue]="option">
        </nz-option>
      </nz-select>
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
  vendors: any = [];

  constructor(private vendorService: VendorService){ }

  ngOnInit() {
    if (this.units.indexOf(this.material.unit) < 0) {
      this.units.push(this.material.unit);
    }
    this.vendorService.getVendors().subscribe(res => {
      if (res.status === 'success') {
        this.vendors = res.result;
        if (this.material.vendor.name) {
          this.material.vendor = this.vendors.find(item => item._id === this.material.vendor._id);
        }
      }
    });
  }

  change() {
    this.materialChange.emit(this.material);
  }
}
