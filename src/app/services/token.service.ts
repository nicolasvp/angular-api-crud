import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	private iss = {
		login : 'http://localhost/laravel-api-angular/public/api/login'
		//login: 'http://laravel-api-angular.test/api/login'
	}

	constructor() { }

	handleToken(token) {
		this.setToken(token);
	}

	setToken(token) {
		localStorage.setItem('token', token);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	removeToken() {
		localStorage.removeItem('token');
	}

	isValidToken() {
		const token = this.getToken();

		if (token) {
			const payload = this.payload(token);

			if (payload) {
				return (payload.iss === this.iss.login) ? true : false;
			}
		}

		return false;
	}

	payload(token) {
		const payload = token.split('.')[1];

		return this.decode(payload);
	}

	decode(payload) {
		return JSON.parse(atob(payload));
	}

	loggedIn() {
		return this.isValidToken();
	}
}
