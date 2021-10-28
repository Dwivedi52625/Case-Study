import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg =''
  invalidLogin: boolean = false;
  constructor(private _service :RegistrationService, private _router :Router) { }

  ngOnInit(): void {
  }
  
  loginUser(){
    if(this._service.loginuserFromRemote(this.user)){
    this._service.loginuserFromRemote(this.user).subscribe(
      (data:User)=>{
        console.log("signed in successfully");
        this.user=data;
        this.redirect();
        
      }
      )
  }
  else
  {
    console.log("Invalid Login Credentials");
    this.msg="Enter valid email and password";
  }
}

  redirect(){
      
    if(this.user.useremail=="Kanak@admin.com" && this.user.password==52625){
     sessionStorage.setItem('role','admin');
     sessionStorage.setItem('useremail',String(this.user.useremail));
     this.invalidLogin=false;
     this._router.navigate(['/admin']).then(()=>{
       window.location.reload();
     })
   }
   else{
     
    sessionStorage.setItem('role','customer');
    sessionStorage.setItem('useremail',String(this.user.useremail));
    this.invalidLogin=false;
    this._router.navigate(["/user"]).then(()=>{
      window.location.reload();
    });

  }
  /*adminLogin(){
    this._service.checkForAdmin(this.user).subscribe(
    data =>console.log("response recived"),
    error =>{
      console.log("exception occured");
      this.msg="Bad credential, please enter valid emailid and password";
    }
    )
  }*/


 }
}
