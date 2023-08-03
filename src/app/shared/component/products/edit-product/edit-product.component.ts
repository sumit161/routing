import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  IcanDeactivate,
  Iproducts,
  Ipstatus,
} from 'src/app/shared/model/Product';
import { CommonDeactivateGuard } from 'src/app/shared/services/common-deactivate.guard';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, IcanDeactivate {
  productId!: number;
  SelectedProduct!: Iproducts;
  canEdit: number = 1;

  @ViewChild('pname') pname!: ElementRef<HTMLInputElement>;
  @ViewChild('pstatus') pstatus!: ElementRef<HTMLSelectElement>;
  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router
  ) {}


  ngOnInit(): void {
    // console.log(this.pname);
    // pstatus


    this.productId = +this._route.snapshot.params['singleProduct2'];
    console.log(this.productId);
    this.SelectedProduct = this._productsService.getSingleProduct(
      this.productId
    )!;
    console.log(this.SelectedProduct);
    console.log(this._route.queryParams.subscribe);

    this._route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
      this.canEdit = +queryParams['canEdit'];
    });
  }
  canDeactive(): boolean | Promise<boolean> | Observable<boolean> {
if(this.SelectedProduct.Pname!==this.pname.nativeElement.value || this.SelectedProduct.Pstatus!==this.pstatus.nativeElement.value){
  console.log("changes");
  return confirm("Do you wnt discard the changes")
}else{
  console.log("no changes");
  return true

}

     return false;
   }
  OnUpdate(pname: HTMLInputElement, Pstatus: HTMLSelectElement) {
    let Obj: Iproducts = {
      Pname: pname.value,
      Pid: this.productId,
      Pstatus: Pstatus.value as Ipstatus,
      canReturn: this.SelectedProduct.canReturn,
    };
    this._productsService.UpdateStatus(Obj);
    this._router.navigate(['products', this.productId]);
  }
}
// { Pname: 'samsung', Pid: 1, Pstatus: 'In progress' },
