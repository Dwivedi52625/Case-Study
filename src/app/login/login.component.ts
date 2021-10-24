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
  constructor(private _service :RegistrationService, private _router :Router) { }

  ngOnInit(): void {
  }
  
  loginUser(){
   this._service.loginuserFromRemote(this.user).subscribe(
    data =>console.log("response recived"),
    error =>{
      console.log("exception occured");
      this.msg="Bad credential, please enter valid emailid and password";
  }
    
   )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
}
