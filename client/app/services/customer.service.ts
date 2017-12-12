import { Customer } from './../models/customer';
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise'
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

  search(searchText: string): Observable<Customer[]> {
    let url = `${this.customersUrl}/${searchText}`
    return this.http
      .get(url)
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

  save(customer: Customer): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    if (customer._id) {
      let url = `${this.customersUrl}/${customer._id}`;
      return this.http
      .put(url, JSON.stringify(customer), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError)
    }
    return this.http
      .post(this.customersUrl, JSON.stringify(customer), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError)
  }
}
