import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  IsLoggedInStatus: boolean = false;
  constructor(private _router: Router) {}
  getLoggedInStatus() {
    return this.IsLoggedInStatus;
  }
  LogInApp(user: string, pass: string) {
    //username //password Api to backend if success
    if (user === 'abc' && pass === 'abc') {
      this.IsLoggedInStatus = true;
      //resp on successiful login>>token,userRole,username
      localStorage.setItem('token', 'JWT token');
      localStorage.setItem('userRole', 'user');
      this._router.navigate(['home']);
    } else if (user === 'abc1' && pass === 'abc1') {
      this.IsLoggedInStatus = true;
      //resp on successiful login>>token,userRole,username
      localStorage.setItem('token', 'JWT token');
      localStorage.setItem('userRole', 'admin');
      this._router.navigate(['home']);
    } else {
      this._router.navigate(['/']);
    }
  }
  LogOutFromApp() {
    this.IsLoggedInStatus = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
  }
  IsAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token')) {
        this.IsLoggedInStatus = true;
      } else {
        this.IsLoggedInStatus = false;
      }
      setTimeout(() => {
        resolve(this.IsLoggedInStatus);
      }, 0);
    });
  }
}
