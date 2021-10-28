import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { search } from './search';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http :HttpClient) { }
 //This is called as dependency injection

//Here i am call rest api from java using httpclient
  public loginuserFromRemote(user :User):Observable<any>{
return this._http.post<any>("http://localhost:8005/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8005/register",user)
  }
  // public checkForAdmin(user:User): Observable<any>{
  //   return this._http.post<any>("http://localhost:8005/getadmin", user)
  // }
  public searchFlightFromRemote(search:search):Observable<search[]>{
    return this._http.get<search[]>("http://localhost:8001/showflights/{from}/{to}/{date}")
  }
}
