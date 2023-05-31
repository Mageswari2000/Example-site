import { Component, OnInit } from '@angular/core';
import { tab } from './dashboard.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabmodal: tab = new tab();
  ActiveTab: string = "hometab"

  constructor() { }

  ngOnInit(): void {
  }


  outputfromtab(event:any) {

  }
  
  Tabchange(event:any) {
    if (event == 'hometab') {
      this.tabmodal.ishome = true
   
    }
    if (event != 'hometab') {
      this.tabmodal.ishome = false
      
    }
    if (event == 'contacttab') {

      this.tabmodal.iscontact = true
  
    }
    if (event != 'contacttab') {
     
      this.tabmodal.iscontact = false
    
    }
    if (event == 'profiletab') {
  
      this.tabmodal.isprofile = true
    }
    if (event != 'profiletab') {
   
      this.tabmodal.isprofile = false
    }
  }


}
