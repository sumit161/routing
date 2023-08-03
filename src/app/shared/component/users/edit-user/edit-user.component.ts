import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  UsersId!: number;
  SelectedUsers!: Iusers;
  CanEdiUser: boolean = true;
  constructor(
    private _route: ActivatedRoute,
    private _usersService: UsersService,
    private _router: Router
  ) {}
  Onupdate(pname: HTMLInputElement) {
    let obj: Iusers = {
      username: pname.value,
      id: this.UsersId,
      userRole: this.SelectedUsers.userRole,
    };
    this._usersService.UpdateName(obj);
    this._router.navigate(['users']);
  }
  ngOnInit(): void {
    this.UsersId = +this._route.snapshot.params['userid'];
    console.log(this.UsersId);
    this.SelectedUsers = this._usersService.getSingleUsers(this.UsersId)!;

    //queryParams
    this._route.queryParams.subscribe((queryParams: Params) => {
      // console.log(queryParams);
      // console.log(this.SelectedUsers.userRole);
      // this.CanEdiUser=+queryParams['CanEdit']
      //               console.log(queryParams['CanEdit']);
      // console.log(queryParams['CanEdit'].includes('user'));
      // this.CanEdiUser= queryParams['CanEdit'].includes('user')
      this.CanEdiUser = queryParams['CanEdit'].includes('user');
    });
    // this.CanEdiUser=this.SelectedUsers.userRole.includes("user");
  }
}
