import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor( private _http: HttpClient ) {
  }

  filter = [];
  getQuery(parameter) {
    return this._http.get( `http://localhost/laravel-api-angular/public/api/${ parameter }` );
  }

  getChampions() {
    return this.getQuery('champion').pipe( map((data: any) => {
      for (const key of Object.keys(data)) {
        const value = data[key];
        const champ = { name: value.name, type: value.type.name, line: value.line.name };
        this.filter.push(champ);
      }
      return this.filter;
    }));
  }

  // Ordena la informacion como array para cargar la data por JS en la Datatable
  getArrayChampions() {
    return this.getQuery('champion').pipe( map((data: any) => {
      for (const key of Object.keys(data)) {
        const value = data[key];
        const champ = [value.name, value.type.name, value.line.name];
        this.filter.push(champ);
      }
      return this.filter;
    }));
  }

  getLines() {
    return this.getQuery('lines');
  }

  getTypes() {
    return this.getQuery('types');
  }

}
