import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: number;
  userObject!: Iusers;
  constructor(
    private _route: ActivatedRoute,
    private _usersService: UsersService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userid'];
    console.log(this.userId);
    this.userObject = this._usersService.getSingleUsers(+this.userId);

    this._route.params.subscribe((myPromise) => {
      console.log(myPromise);
      this.userId = this._route.snapshot.params['userid'];
      this.userObject = this._usersService.getSingleUsers(+this.userId);
    });
  }
  gOToUpdate() {
    this._router.navigate(['/users', this.userId, 'editUser'], {
      queryParamsHandling: 'preserve',
    });
  }
}
