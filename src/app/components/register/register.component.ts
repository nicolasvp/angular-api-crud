import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  private form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  private error_list = [];

  constructor( private _registerService: RegisterService, private _router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._registerService.register( this.form )
    .subscribe( data => this.handleResponse( data ),
                error => this.handleError( error )
              );
  }

  handleError( error ) {
    this.error_list = [];
    for (let key of Object.keys(error.error.error)) {
      let messages = error.error.error[key];
      this.error_list.push(messages);
    }
  }

  handleResponse( data ) {
    this.error_list = [];
    this._router.navigateByUrl( '/login' );
  }
}
