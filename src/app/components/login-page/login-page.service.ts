import { DoBootstrap, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  data=  {
    "name": "Mageswari",
    "contact": "9994689030",
    "address": "tnagar",
    "email": "demomail@gmail.com",
    "password": "demomail",
    "id": 1
  }


  /////// Behavioral Subject ///////////
  usersubject=new BehaviorSubject<any>(this.data)



}
