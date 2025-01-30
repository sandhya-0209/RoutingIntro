import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr : Array<Iuser> =[
    {
      userName : 'John Doe',
      userId : '123',
      userRole : 'Admin'
    },
    {
      userName : 'Jen Doe',
      userId : '124',
      userRole : 'Candidate'
    },
    {
      userName : 'May Doe',
      userId : '125',
      userRole : 'Admin'
    },
    {
      userName : 'July Doe',
      userId : '126',
      userRole : 'Candidate'
    }
  ];
  constructor(
    private _router : Router
  ) { }

  fetchUSers():Array<Iuser>{
    //Api Call to get all users data.
    return this.usersArr;
  }

  getUsersInfo(id:string):Iuser{
    //API call to get a user info by using ID
    return this.usersArr.find(user => user.userId === id)!;
  }

  addUser(user: Iuser){
    this.usersArr.push(user);
    //navigate to usersDashboard.
    this._router.navigate(['users'])
  }

  // updateUser(updatedObj : Iuser){
  //   //API call to update obj
  //   let getIndex = this.usersArr.findIndex(user => user.userId === updatedObj.userId)
  //   this.usersArr[getIndex] = updatedObj;
  //   this._router.navigate(['users']);
  // }
}
