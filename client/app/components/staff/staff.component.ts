import { StaffService } from './../../services/staff.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { cloneDeepWith } from 'lodash';

@Component({
  selector: 'staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  staffs: any = [];
  pageSize: number = 10;
  showCreate: boolean = false;
  newStaff: any = {
    name: '',
    phone: '',
    address: '',
    remark: ''
  };

  constructor(private staffService: StaffService,
              private _notification: NzNotificationService,
              private confirmServ: NzModalService) {}

  ngOnInit() {
    this.staffService.getStaffs().subscribe(res => {
      if (res.status === 'success') {
        this.staffs = res.result;
      }
    });
  }

  delete(id: string, name: string) {
    let that = this;
    this.confirmServ.confirm({
      title  : `您是否确认要删除${name}`,
      content: '',
      onOk() {
        that.staffService.delete(id).subscribe(res => {
          if (res.status === 'success') {
            that._notification.create('success', res.msg, `${name}删除成功`);
            that.staffService.getStaffs().subscribe(res => {
              if (res.status === 'success') {
                that.staffs = res.result;
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

  add() {
    this.staffService.save(this.newStaff).subscribe(res => {
      if (res.status === 'success') {
        this.showCreate = false;
        this._notification.create('success', res.msg, `${name}保存成功`);
        this.newStaff = {
          name: '',
          phone: '',
          address: '',
          remark: ''
        };
        this.staffService.getStaffs().subscribe(res => {
          if (res.status === 'success') {
            this.staffs = res.result;
          }
        });
      } else {
        this._notification.create('error', res.msg, `${name}保存失败`);
      }
    });
  }

  edit(staff: any) {
    this.newStaff = cloneDeepWith(staff);
    this.showCreate = true;
  }

  search(searchText: string) {
    this.staffService.search(searchText).subscribe(res => {
      if (res.status === 'success') {
        this.staffs = res.result;
      }
    });
  }
}
