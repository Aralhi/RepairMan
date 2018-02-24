import { Staff } from './../models/staff';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class StaffService {
  private staffUrl = 'api/staff';

  constructor(private http: Http, private apiService: ApiService) {}

  getStaffs(): Observable<any> {
    return this.http
      .get(this.staffUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  search(searchText: string): Observable<any> {
    let url = `${this.staffUrl}/${searchText}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  delete(id: string): Observable<any> {
    let url = `${this.staffUrl}/${id}`;
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  save(staff: Staff): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (staff._id) {
      let url = `${this.staffUrl}/${staff._id}`;
      return this.http
      .put(url, JSON.stringify(staff), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
    }
    return this.http
      .post(this.staffUrl, JSON.stringify(staff), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }
}
