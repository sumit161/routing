import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleGuardGuard implements CanActivate {
  getUserRole!: string;
  localDeta!: string;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.getUserRole = route.data['userRole'];
    this.localDeta = localStorage.getItem('userRole')!;
    // console.log(this.getUserRole);
    // console.log(this.localDeta);
    if (this.getUserRole.includes(this.localDeta)) {
      return true;
    } else {
      return false;
    }
  }
}
