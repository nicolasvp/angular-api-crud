import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	// private baseUrl = 'http://localhost/laravel-api-angular/public/api';
	private baseUrl = 'http://laravel-api-angular.test/api';

	constructor(private _http: HttpClient) { }

	register(data) {
		return this._http.post(this.baseUrl.concat('/register'), data);
	}
}
