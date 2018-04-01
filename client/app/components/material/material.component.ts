import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { cloneDeepWith } from 'lodash';
@Component({
  templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit{
  pageSize: number = 10;
  showCreate: boolean = false;
  materials: any = [];
  searchText: string = '';
  newMaterial: any = {
    name: '',
    carType: '',
    count: '',
    unit: '',
    vendor: {},
    remark: ''
  };

  constructor(private materialService: MaterialService,
              private _notification: NzNotificationService,
              private confirmServ: NzModalService) { }

  ngOnInit() {
    this.materialService.getMaterials().subscribe(res => {
      if (res.status === 'success') {
        this.materials = res.result;
      }
    });
  }

  add() {
    this.materialService.save(this.newMaterial).subscribe(res => {
      if (res.status === 'success') {
        this.showCreate = false;
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.newMaterial = {
          name: '',
          carType: '',
          count: '',
          unit: '',
          vendor: {},
          remark: ''
        };
        this.materialService.getMaterials().subscribe(res => {
          if (res.status === 'success') {
            this.materials = res.result;
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
        that.materialService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.materialService.getMaterials().subscribe(res => {
              if (res.status === 'success') {
                that.materials = res.result;
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
    this.newMaterial = cloneDeepWith(customer);
    this.showCreate = true;
  }

  search(evenet) {
    this.materialService.search(this.searchText).subscribe(res => {
      if (res.status === 'success') {
        this.materials = res.result;
      }
    });
  }
}
