import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor( private _auth: AuthService, private _router: Router, private _token: TokenService ) { }

  ngOnInit() {

    this._auth.authStatus.subscribe( value => this.loggedIn = value );
  }

  logout( event: MouseEvent ) {
    event.preventDefault();
    this._auth.changeAuthStatus( false );
    this._token.removeToken();
    this._router.navigateByUrl( '/login' );
  }

}
