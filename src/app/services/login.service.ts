import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost/laravel-api-angular/public/api';

  constructor( private _http: HttpClient ) { }

  login( data ) {
    return this._http.post(this.baseUrl.concat('/login'), data);
  }
}
