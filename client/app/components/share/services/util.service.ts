import { Injectable } from '@angular/core';
@Injectable()

export class UtilService {
  getCustomerModel() {
    return {
      name: '',
      carNumber: '',
      phone: '',
      carType: '',
      company: '',
      remark: ''
    };
  }
}
