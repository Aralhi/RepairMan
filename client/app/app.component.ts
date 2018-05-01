import { Subscription } from 'rxjs/Subscription';
import { LoginService } from './services/login.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;
  user: any;
  showList: boolean = false;
  constructor(private loginService: LoginService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    if (window.location.href.indexOf('login') >= 0) {
      this.isLogin = true;
    }
    this.loginService.getUserInfo().subscribe(res => {
      if (res.status === 'success') {
        this.user = res.result;
      } else {
        this.user = undefined;
        this.isLogin = true;
        this.router.navigate(['../login'], { relativeTo: this.activatedRoute});
      }
    });
  }
}
