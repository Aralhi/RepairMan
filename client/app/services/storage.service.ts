import { Storage } from './../models/storage';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class StorageService {
  private storagesUrl = 'api/storages';

  constructor(private http: Http, private apiService: ApiService) { }

  getStorages(): Observable<any> {
    return this.http
      .get(this.storagesUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  search(searchText: string): Observable<any> {
    let url = `${this.storagesUrl}/${searchText}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  delete(id: string): Observable<any> {
    let url = `${this.storagesUrl}/${id}`;
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  save(storage: Storage): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (storage._id) {
      let url = `${this.storagesUrl}/${storage._id}`;
      return this.http
      .put(url, JSON.stringify(storage), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
    }
    return this.http
      .post(this.storagesUrl, JSON.stringify(storage), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }
}
