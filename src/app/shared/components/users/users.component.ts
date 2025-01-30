import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr !: Array<Iuser>
  constructor(
    private _usersService : UsersService
  ) { }

  ngOnInit(): void {
   this.usersArr = this._usersService.fetchUSers()
  }

}
