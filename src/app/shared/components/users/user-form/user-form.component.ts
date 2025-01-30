import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEditMode : boolean = false;
  userId !: string;
  usersForm !: FormGroup;
  mode : string = 'create';
  editUserObj !: Iuser
  constructor(
    private _route : ActivatedRoute,
    private _uuid :  UuidService,
    private _usersService : UsersService
  ) { }
  ngOnInit(): void {
      this.createUserForm();
      this.setEditMode()
  }

   createUserForm(){
    this.usersForm = new FormGroup({
      userName : new FormControl(null,[Validators.required]),
      userRole : new FormControl(null,[Validators.required])
    })
   }

   setEditMode(){
    this.userId = this._route.snapshot.params['userId'];
    if(this.userId){
      this.isInEditMode = true;
      this.mode = 'edit';
      //API Call by using userId to et USER_OBJ
      this.editUserObj = this._usersService.getUsersInfo(this.userId)
      //PATCH data in form 
      this.usersForm.patchValue(this.editUserObj)
   
    }else{
      this.isInEditMode = false;
      this.mode = 'create'
    }
   }

  onUserAdd(){
    if(this.usersForm.valid){
      // console.log(this.usersForm.value)
      //mode === create >> addUser API Call
      //mode === edit >> update API Call
      if(this.mode === 'create'){
        let userObj = {...this.usersForm.value, userId : this._uuid.generateUuid()};
        this._usersService.addUser(userObj);
      }else if(this.mode === 'edit'){
        console.log('Update Api Call')
      }

      
    }
  }
}
