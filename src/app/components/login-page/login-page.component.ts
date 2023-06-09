import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router,public loginService:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    console.log(this.loginForm)
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        console.log(user,"user")
        this.loginService.usersubject.next(user)
        alert('Login Succesful');
        this.loginForm.reset()
       this.router.navigate(["dashboardpage"])

      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}
