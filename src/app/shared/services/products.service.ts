import { Injectable } from '@angular/core';
import { Iproducts } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  ProductArray: Array<Iproducts> = [
    { Pname: 'samsung', Pid: 1, Pstatus: 'In progress', canReturn: 0 },
    { Pname: 'Nokia', Pid: 2, Pstatus: 'Delevered', canReturn: 1 },
    { Pname: 'vivo', Pid: 3, Pstatus: 'In dispached', canReturn: 0 },
  ];
  constructor() {}
  getAllProducts(): Array<Iproducts> {
    return this.ProductArray;
  }
  getSingleProduct(id: number) {
    return this.ProductArray.find((ele) => ele.Pid === +id);
  }
  UpdateStatus(PObj: Iproducts) {
    this.ProductArray.map((ele) => {
      if (ele.Pid === PObj.Pid) {
        ele.Pname = PObj.Pname;
        ele.Pstatus = PObj.Pstatus;
      }
    });
  }
}
