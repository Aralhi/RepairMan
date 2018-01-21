import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Order } from './../models/order';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class OrderService {
  private orderUrl = 'api/orders';
  constructor(private http: Http, private apiService: ApiService) {}

  getOrder(id: string) {
    return this.http.get(this.orderUrl + '/' + id)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  getOrders(): Observable<any> {
    return this.http
      .get(this.orderUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  search(search: any): Observable<any> {
    let url = `${this.orderUrl}/search/${search.status}/${search.searchText}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  save(order: Order): Observable<any> {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    if (order._id) {
      let url = `${this.orderUrl}/${order._id}`;
      return this.http
        .put(url, JSON.stringify(order), { headers: headers })
        .map(res => res.json())
        .catch(this.apiService.handleError);
    }
    return this.http
      .post(this.orderUrl, JSON.stringify(order), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  delete(id: string): Observable<any> {
    let url = `${this.orderUrl}/${id}`;
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }
}
