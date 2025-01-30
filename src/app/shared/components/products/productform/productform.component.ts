import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
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
  productObj !: Iproduct
  // mode : 
  constructor(
    private _routes : ActivatedRoute,
    private _uuid : UuidService,
    private _productService : ProductsService 
  ) { }
  ngOnInit(): void {
    this.createProdForm()
      this.setEditMode();
  }
  createProdForm(){
    this.prodForm= new FormGroup({
      pname : new FormControl(null,[Validators.required]),
      pstatus : new FormControl(null,[Validators.required]),
      canReturn : new FormControl(null,[Validators.required])
    })
}
  setEditMode(){
     //component will in editMode >> when we have params in current Route
     this.productId = this._routes.snapshot.params['prodId'];
     if(this.productId){
       this.isInEditMode = true;
       //we can get object by using ID
       this.productObj = this._productService.getProduct(this.productId);
      //  console.log(this.productObj)
      let canReturn = this.productObj.canReturn ? 'Yes' : 'NO'
      this.prodForm.patchValue({...this.productObj, canReturn : canReturn})
     }else{
      this.isInEditMode = false
     }
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

  onUpdate(){
    // console.log('updated !!!')
    if(this.isInEditMode && this.prodForm.valid){
      // console.log('Updated!!!')
      //Updated object
      let canReturnVal = this.prodForm.value.canReturn === 'Yes' ? 1 : 0;
      let updatedObj: Iproduct = {...this.prodForm.value, 
        canReturn : canReturnVal, pid: this.productId};
      // console.log(updatedObj);
      this._productService.updatedProd(updatedObj)
    }
  }
}
