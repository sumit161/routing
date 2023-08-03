import { Injectable } from '@angular/core';
import { Iusers } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userArray: Array<Iusers> = [
    { username: 'jhon', id: 1 ,userRole:"admin"},//editable
    { username: 'jen', id: 2 ,userRole:"user"},//not editable
    { username: 'july', id: 3 ,userRole:"admin"},//editable
    { username: 'sara', id: 4 ,userRole:"user"},//
    { username: 'lucy', id: 5 ,userRole:"admin"},//
    { username: 'danny', id: 6 ,userRole:"user"},//

  ];
  constructor() {}
  getallUsers(): Array<Iusers> {
    return this.userArray;
  }
  getSingleUsers(id:number):Iusers{
   return  this.userArray.find(ele=>ele.id===id)!
  }


  UpdateName(PObj: Iusers) {
    this.userArray.forEach((ele) => {
      if (ele.id === PObj.id) {
        ele.username = PObj.username;
      }
    });
  }
}
