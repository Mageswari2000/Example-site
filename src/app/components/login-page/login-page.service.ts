import { DoBootstrap, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  usersubject=new Subject()

sent(data:any){
  this.usersubject.next(data)
}

}
