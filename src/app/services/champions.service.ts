import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  private champions:any[];
  private lines:any[];
  private types:any[];

  constructor( private _http: HttpClient ) {
    console.log("champions service ready!");
  }

  getChampions(){
    return this._http.get('http://localhost/angular-crud/public/api/champion');
  }

  getLines(){
    return this._http.get('http://localhost/angular-crud/public/api/lines');
  }

  getTypes(){
    return this._http.get('http://localhost/angular-crud/public/api/types');
  }

}
