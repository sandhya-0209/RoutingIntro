import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodsArr !: Array<Iproduct>;
  constructor(
    private _productService : ProductsService
  ) { }
  ngOnInit(): void {
    this.prodsArr = this._productService.fetchAllProducts()
  }

}
