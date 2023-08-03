import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/Product';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsinfo: Array<Iproducts> = [];
  selectedProductId!: number;

  constructor(
    private _productsService: ProductsService,
    private _router: Router
  ) {}
  Onclick(a: any) {
    // console.log(a);
  }
  ngOnInit(): void {
    this.productsinfo = this._productsService.getAllProducts();
    this.selectedProductId = this.productsinfo[0].Pid;
  }
  OnProductclick() {
    this._router.navigate(['/users']); //problem yeto nahi dila ki
  }
}
