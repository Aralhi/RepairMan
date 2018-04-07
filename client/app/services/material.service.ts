import { Material } from './../models/material';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class MaterialService {
  private materialsUrl = 'api/materials';

  constructor(private http: Http, private apiService: ApiService) { }

  getMaterials(): Observable<any> {
    return this.http
      .get(this.materialsUrl)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  search(searchText: string): Observable<any> {
    let url = `${this.materialsUrl}/${searchText}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  findLessThan(key: string, value: number): Observable<any> {
    let url = `${this.materialsUrl}/lessThan/${key}/${value}`;
    return this.http
      .get(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  delete(id: string): Observable<any> {
    let url = `${this.materialsUrl}/${id}`;
    return this.http
      .delete(url)
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  save(material: Material): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (material._id) {
      let url = `${this.materialsUrl}/${material._id}`;
      return this.http
      .put(url, JSON.stringify(material), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
    }
    return this.http
      .post(this.materialsUrl, JSON.stringify(material), { headers: headers })
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  updateCount(params) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.materialsUrl}/${params._id}`;
    return this.http
    .post(url, JSON.stringify({
      key: params.key,
      value: params.value
    }), { headers: headers })
    .map(res => res.json())
    .catch(this.apiService.handleError);
  }
}
