import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  productObj !: Iproduct;
  productId !: string
  constructor(
    private _productsService : ProductsService,
    private _route : ActivatedRoute
  ) { }
  ngOnInit(): void {
    // console.log(this._route.snapshot.params['prodId'])
    this.productId = this._route.snapshot.params['prodId'];
    this.productObj = this._productsService.getProduct(this.productId);
  }

}
