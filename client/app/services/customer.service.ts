import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Customer } from '../models/customer'
import { ApiService } from './api.service'

@Injectable()
export class CustomerService {
  private customersUrl = 'api/customers'

  constructor(private http: Http, private apiService: ApiService) {}

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get(this.customersUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError)
  }

  delete(id: string): Observable<any> {
    let url = `${this.customersUrl}/${id}`
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError)
  }
}
