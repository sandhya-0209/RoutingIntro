import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  isInEditMode : boolean = false;
  productId !: string;
  prodForm !: FormGroup;
  constructor(
    private _routes : ActivatedRoute,
    private _uuid : UuidService,
    private _productService : ProductsService 
  ) { }
  ngOnInit(): void {
    this.createProdForm()
      this.setEditMode();
  }

  setEditMode(){
     //component will in editMode >> when we have params in current Route
     this.productId = this._routes.snapshot.params['prodId'];
     if(this.productId){
       this.isInEditMode = true
     }else{
      this.isInEditMode = false
     }
  }

  createProdForm(){
      this.prodForm= new FormGroup({
        pname : new FormControl(null,[Validators.required]),
        pstatus : new FormControl(null,[Validators.required]),
        canReturn : new FormControl(null,[Validators.required])
      })
  }

  onProdAdd(){
    if(this.prodForm.valid){
      // console.log(this.prodForm.value);
      let canReturnVal = this.prodForm.value.canReturn === 'Yes' ? 1 : 0;
      // console.log(canReturnVal)
      let newProdObj = {...this.prodForm.value, canReturn : canReturnVal,
         pid: this._uuid.generateUuid()}
        //  console.log(newProdObj);
        this._productService.saveProduct(newProdObj);
    }
  }
}
