import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable()
export class LoginService {
  private logUrl = 'auth';
  constructor(private http: Http, private apiService: ApiService) {}

  authQQ(): Observable<any> {
    return this.http
      .get(this.logUrl + '/qq')
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  authQQCallback(): Observable<any> {
    return this.http
      .get(this.logUrl + '/qq/callback')
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }

  getUserInfo(): Observable<any> {
    return this.http
      .get('/auth/user/info')
      .map(res => res.json())
      .catch(this.apiService.handleError);
  }
}
