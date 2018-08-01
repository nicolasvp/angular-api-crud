import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  private form = {
    email: null,
    password: null
  }

  private error = null;

  constructor( private _loginService : LoginService, private _tokenService : TokenService, private _router: Router, private _auth: AuthService ) {}

  ngOnInit() {

  }

  onSubmit() {
    this._loginService.login( this.form )
    .subscribe( data => this.handleResponse( data ),
                error => this.handleError( error )
              );
  }

  handleError( error ) {
    this.error = error.error.error;
  }

  handleResponse( data ) {
    //console.log(data);
    this._tokenService.handleToken( data.data.token );
    this._auth.changeAuthStatus( true );
    this._router.navigateByUrl( '/home' );
  }
}
