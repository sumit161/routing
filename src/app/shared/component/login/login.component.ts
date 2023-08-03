import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  IsHavingAccount: boolean = false;
IsLock: boolean =true
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  Onlogin(user: HTMLInputElement, pass: HTMLInputElement) {
/*     if (user.value === '' && pass.value === '') {
      this._authService.LogInApp();
      this._router.navigate(['/home']);
    } else {
      this._router.navigate(['/']);
    } */
    this._authService.LogInApp(user.value, pass.value);
  }
}
