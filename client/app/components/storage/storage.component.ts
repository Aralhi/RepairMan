import { Component } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { cloneDeepWith } from 'lodash';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {
  pageSize: number = 10;
  showCreate: boolean = false;
  storages: any = [];
  searchText: string = '';
  newStorage: any = {
    name: '',
    remark: ''
  };

  constructor(private storageService: StorageService,
    private _notification: NzNotificationService,
    private confirmServ: NzModalService) { }

  ngOnInit() {
    // this.storageService.getStorages().subscribe(res => {
    //   if (res.status === 'success') {
    //     this.storages = res.result;
    //   }
    // });
  }

  add() {
    this.storageService.save(this.newStorage).subscribe(res => {
      if (res.status === 'success') {
        this.showCreate = false;
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.newStorage = {
          name: '',
          phone: '',
          address: '',
          remark: ''
        };
        this.storageService.getStorages().subscribe(res => {
          if (res.status === 'success') {
            this.storages = res.result;
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
        that.storageService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.storageService.getStorages().subscribe(res => {
              if (res.status === 'success') {
                that.storages = res.result;
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
    this.newStorage = cloneDeepWith(customer);
    this.showCreate = true;
  }

  search(evenet) {
    this.storageService.search(this.searchText).subscribe(res => {
      if (res.status === 'success') {
        this.storages = res.result;
      }
    });
  }
}
