import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/interface';
import { Iproducts } from '../../model/Product';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userInfo: Array<Iusers> = [];
  selectedUserId!: Iusers;
  p!:number
  idclick!: number;
  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this.userInfo = this._usersService.getallUsers();
    this.selectedUserId = this.userInfo[0];
    // console.log(this._userComponent.userId as number)

  }
}
