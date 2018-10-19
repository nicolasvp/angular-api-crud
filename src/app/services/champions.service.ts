import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ChampionsService {

	constructor(private _http: HttpClient) {
	}

	filter = [];
	getQuery(parameter) {
		// return this._http.get( `http://localhost/laravel-api-angular/public/api/${ parameter }` );
		return this._http.get(`http://laravel-api-angular.test/api/${parameter}`);
	}

	getChampions() {
		return this.getQuery('champion').pipe(map((data: any) => {
			for (const key of Object.keys(data)) {
				const value = data[key];
				const champ = { name: value.name, type: value.type.name, line: value.line.name, id: value.id };
				this.filter.push(champ);
			}
			return this.filter;
		}));
	}

	getChampion(id: Number) {
		return this.getQuery(`champion/${id}`).pipe(map((data: any) => {
			const champ = {
				id: data[0].id,
				name: data[0].name,
				type_id: data[0].type.id,
				type: data[0].type.name,
				line_id: data[0].line.id,
				line: data[0].line.name,
				image: data[0].image
			};
			return champ;
		}));
	}

	getLines() {
		return this.getQuery('lines');
	}

	getTypes() {
		return this.getQuery('types');
	}

}
