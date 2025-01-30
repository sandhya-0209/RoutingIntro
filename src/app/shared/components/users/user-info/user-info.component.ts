import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userId !: string;
  userObj !: Iuser
  constructor(
    private _route : ActivatedRoute,
    private _userService : UsersService
  ) { }
  ngOnInit(): void {
    // console.log(this._route.snapshot.params['userId']);
    this.userId = this._route.snapshot.params['userId'];
    //we have to do api call to get userInfo.
    this.userObj = this._userService.getUsersInfo(this.userId);
  }

}
