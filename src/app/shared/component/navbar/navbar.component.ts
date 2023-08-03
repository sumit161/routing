import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}
  localStorageInfo!: string;
  ngOnInit(): string {
   return this.localStorageInfo= localStorage.getItem("userRole")!
    // console.log(this.localStorageInfo);

  }
  // LogIn() {
  //   this._authService.LogInApp();//true
  // }
  LogOut() {
    this._router.navigate(['/']);
    this._authService.LogOutFromApp(); //false
  }
}
