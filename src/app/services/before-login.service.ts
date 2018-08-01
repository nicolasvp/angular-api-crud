import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this._token.loggedIn();
  }
  constructor( private _token: TokenService ) { }
}
