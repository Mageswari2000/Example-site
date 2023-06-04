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
    this.loginService.usersubject.subscribe((data:any)=>
    {
      console.log(data,"dataaaaaaaaaa")
    this.home=data.name
    this.contact=data.contact
    this.profile=data.email


    })
this.getdata()   

  }
getdata(){
  setTimeout(()=>{
    console.log(this.home,"hhhhhhhhhhhhhh");
  
  },5000)

}

  outputfromtab(event:any) {

  }
  
  Tabchange(event:any) {
    if (event == 'hometab') {
      this.tabmodal.ishome = true
      console.log(this.home,"oooo")


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
