import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  OnUserClick() {
    this._router.navigate(['/users',]);
  }
}
