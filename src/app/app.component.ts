import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private loggedIn : boolean;

  constructor( private _auth: AuthService, private _router: Router, private _token: TokenService ) { }

  ngOnInit() {
    this._auth.authStatus.subscribe( value => this.loggedIn = value );
  }
}
