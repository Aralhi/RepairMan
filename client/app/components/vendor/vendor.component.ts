import { Component } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { cloneDeepWith } from 'lodash';
import { VendorService } from '../../services/vendor.service';
@Component({
  template: `
    <div class="page-container">
      <div style="margin-bottom: 10px;">
        <button nz-button [nzType]="'primary'" (click)="showCreate = !showCreate">
          <span>新建供应商</span>
        </button>
        <div class="search-input">
          <nz-input [nzType]="'search'" [(ngModel)]="searchText" (nzOnSearch)="search($event)" (keyup)="search($event)"></nz-input>
        </div>
      </div>
      <!--创建供应商-->
      <div class="add-contain" *ngIf="showCreate">
        <div class="row">
          <span class="common-label">名字:</span>
          <div class="col-md-2 mr-20">
            <nz-input [(ngModel)]="newVendor.name"></nz-input>
          </div>
          <span class="common-label">电话:</span>
          <div class="col-md-2 mr-20">
            <nz-input [(ngModel)]="newVendor.phone"></nz-input>
          </div>
          <span class="common-label">地址:</span>
          <div class="col-md-2 mr-20">
            <nz-input [(ngModel)]="newVendor.address"></nz-input>
          </div>
          <span class="common-label">备注:</span>
          <div class="col-md-2 mr-20">
            <nz-input [(ngModel)]="newVendor.remark"></nz-input>
          </div>
        </div>
        <div style="width: 50px; margin: 10px auto 0;">
          <button style="width: 80px;" nz-button [nzType]="'primary'" (click)="add()">
            <span>保存</span>
          </button>
        </div>
      </div>
      <nz-table #nzTable [nzDataSource]="vendors" [nzPageSize]="pageSize" [nzShowTotal]="true">
          <thead nz-thead>
            <tr>
              <th nz-th><span>名称</span></th>
              <th nz-th><span>电话</span></th>
              <th nz-th><span>地址</span></th>
              <th nz-th><span>操作</span></th>
            </tr>
          </thead>
          <tbody nz-tbody>
            <tr nz-tbody-tr *ngFor="let data of nzTable.data">
              <td nz-td>{{data.name}}</td>
              <td nz-td>{{data.phone}}</td>
              <td nz-td>{{data.address}}</td>
              <td nz-td>
                <span>
                  <a (click)="edit(data)">编辑</a>
                  <span nz-table-divider></span>
                  <a (click)="delete(data._id, data.name)">删除</a>
                </span>
              </td>
            </tr>
          </tbody>
        </nz-table>
    </div>
  `,
  styles: []
})
export class VendorComponent {
  pageSize: number = 10;
  showCreate: boolean = false;
  vendors: any = [];
  searchText: string = '';
  newVendor: any = {
    name: '',
    phone: '',
    address: '',
    remark: ''
  };

  constructor(private vendorService: VendorService,
    private _notification: NzNotificationService,
    private confirmServ: NzModalService) { }

  ngOnInit() {
    this.vendorService.getVendors().subscribe(res => {
      if (res.status === 'success') {
        this.vendors = res.result;
      }
    });
  }

  add() {
    this.vendorService.save(this.newVendor).subscribe(res => {
      if (res.status === 'success') {
        this.showCreate = false;
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.newVendor = {
          name: '',
          phone: '',
          address: '',
          remark: ''
        };
        this.vendorService.getVendors().subscribe(res => {
          if (res.status === 'success') {
            this.vendors = res.result;
          }
        });
      } else {
        this._notification.create('error', res.msg, `${name}保存失败`);
      }
    });
  }

  delete(id: string, name: string) {
    let that = this;
    this.confirmServ.confirm({
      title: `您是否确认要删除${name}`,
      content: '',
      onOk() {
        that.vendorService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.vendorService.getVendors().subscribe(res => {
              if (res.status === 'success') {
                that.vendors = res.result;
              }
            });
          } else {
            that._notification.create('error', res.msg, `${name}删除失败`);
          }
        });
      },
      onCancel() {
      }
    });
  }

  edit(customer: any) {
    this.newVendor = cloneDeepWith(customer);
    this.showCreate = true;
  }

  search(evenet) {
    this.vendorService.search(this.searchText).subscribe(res => {
      if (res.status === 'success') {
        this.vendors = res.result;
      }
    });
  }

}
