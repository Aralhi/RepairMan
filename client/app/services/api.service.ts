import { Injectable } from '@angular/core';
@Injectable()

export class ApiService {
  handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
