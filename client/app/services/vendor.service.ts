import { Vendor } from './../models/vendor';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class VendorService {
  private vendorsUrl = 'api/vendors';

  constructor(private http: Http, private apiService: ApiService) { }

  getVendors(): Observable<any> {
    return this.http
      .get(this.vendorsUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  search(searchText: string): Observable<any> {
    let url = `${this.vendorsUrl}/${searchText}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  delete(id: string): Observable<any> {
    let url = `${this.vendorsUrl}/${id}`;
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  save(vendor: Vendor): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (vendor._id) {
      let url = `${this.vendorsUrl}/${vendor._id}`;
      return this.http
      .put(url, JSON.stringify(vendor), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
    }
    return this.http
      .post(this.vendorsUrl, JSON.stringify(vendor), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }
}
