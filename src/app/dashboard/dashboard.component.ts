import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../components/login-page/login-page.service';
import { tab } from './dashboard.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabmodal: tab = new tab();
  ActiveTab: string = "hometab"
 public home:any
 public contact:any
 public  profile:any
  constructor(public router:Router,public loginService:LoginService) { }
 
  ngOnInit(){
    this.tabmodal.ishome = true
    this.loginService.usersubject.subscribe((data:any)=>
    {
    this.home=(data.name!=null&&data.name!=undefined&&data.name!='')?data.name:data;
    this.contact=data
    this.profile=data.email
    })
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


  Logout(){
    this.router.navigate(["login"])
  }


}
