import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/Product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId!: number;
  productObj!: Iproducts;
  // @Output() clickid:EventEmitter<number> = new EventEmitter<number>()
  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router
  ) {
    this._route.data.subscribe((e) => {
      console.log(e['ResolveProduct']);
      this.productObj = e['ResolveProduct']
    });
  }

  ngOnInit(): void {
    console.log(this._route.snapshot);
    //child routing reset part
    // this.productId = this._route.snapshot.params['singleProduct1'];
    // console.log(this.productId);
//when use resolve then below three line code commented
    // this._route.params.subscribe((p: Params) => {
    //   this.productId = p['singleProduct1'];
    //   this.productObj = this._productsService.getSingleProduct(this.productId)!; //not undefined not
    // });

    // this.clickid.emit(this.productId)
    // console.log(this.productObj);
  }
  goToEditProd() {
    // return object from resolve service one key is id and this id put in that method
    // this._router.navigate(['/products/', this.productObj.Pid, 'edit'], {
    //   queryParamsHandling: 'preserve',
    // });


    this._router.navigate( ['edit'], {
      queryParamsHandling: 'preserve',
      relativeTo:this._route
    });
  }
}
