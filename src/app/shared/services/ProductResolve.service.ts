import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproducts } from "../model/Product";
import { Observable } from "rxjs";
import { ProductsService } from "./products.service";

@Injectable({
  providedIn:'root'
})
export class ProductResolveService implements Resolve<Iproducts> {
  constructor(private _productsService:ProductsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
// console.log(+route.params['singleProduct1']);
let getId = +route.params['singleProduct1'];
console.log(this._productsService.getSingleProduct(getId));
return this._productsService.getSingleProduct(getId)


  }

}
// Iproducts | Observable<Iproducts> | Promise<Iproducts>
