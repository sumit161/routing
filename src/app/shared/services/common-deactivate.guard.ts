import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProductComponent } from '../component/products/edit-product/edit-product.component';
import { IcanDeactivate } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CommonDeactivateGuard implements CanDeactivate<IcanDeactivate> {
  canDeactivate(
    component: IcanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(component.canDeactive());

      return component.canDeactive();
  }

}
