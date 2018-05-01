import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  loginQQ() {
    // passport.authenticate('qq');
    this.loginService.authQQ().subscribe(res => {
      console.log(res);
    });
  }
}
