import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr :Array<Iproduct> =[
    {
      pname: 'smasung M31',
      pid : '123',
      pstatus : 'In-Progress',
      canReturn : 1
    },
    {
      pname: 'smasung TV',
      pid : '124',
      pstatus : 'Dispatched',
      canReturn : 1
    },
    {
      pname: 'Iphone',
      pid : '123',
      pstatus : 'Delivered',
      canReturn : 0
    }
  ]
  constructor(
    private _router : Router
  ) { }

  fetchAllProducts(): Array<Iproduct>{
     return this.productsArr;
  }

  getProduct(productId:string):Iproduct{
    return this.productsArr.find(prod => prod.pid === productId)!;
  }

  saveProduct(prod : Iproduct){
    //API call to PoSt prodObject.
    this.productsArr.push(prod);
    this._router.navigate(['products'])
  }

  updatedProd(updatedObj : Iproduct){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === updatedObj.pid)
    this.productsArr[getIndex] = updatedObj;
    this._router.navigate(['products'])
  }

  removeProd(removeId: string){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === removeId);
    this.productsArr.splice(getIndex,1);
    this._router.navigate(['products'])
  }
}
