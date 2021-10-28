import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { search } from '../search';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

search= new search();

  constructor(private _service :RegistrationService, private _router :Router) { }

  ngOnInit(): void {
  }
searchflight(){
  this._service.searchFlightFromRemote(this.search).subscribe(
    data=>{}
  )
}
}
