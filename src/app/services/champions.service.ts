import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  private champions:any[];
  private lines:any[];
  private types:any[];
  private baseUrl = 'http://laravel-api-angular.test/api';

  constructor( private _http: HttpClient ) {
  }

  getChampions(){
    return this._http.get( this.baseUrl.concat( '/champion' ) );
  }

  getLines(){
    return this._http.get( this.baseUrl.concat( '/lines' ) );
  }

  getTypes(){
    return this._http.get( this.baseUrl.concat( '/types' ) );
  }

}
