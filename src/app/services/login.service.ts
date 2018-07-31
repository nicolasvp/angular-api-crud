import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http: HttpClient ) { }

  signUp( data ) {
    return this._http.post('http://localhost/angular-crud/public/api/register', data);
  }

  login( data ) {
    return this._http.post('http://localhost/angular-crud/public/api/login', data);
  }
}
