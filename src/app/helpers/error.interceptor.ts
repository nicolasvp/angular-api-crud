import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

// Intercepta cada respuesta HTTP del API y verifica si devuelve un error 401
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(  private _auth: AuthService, private _tokenService: TokenService ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                // Hace logout y remueve el token del localstorage si el API devuelve un error 401(Unauthorized)
                this._auth.changeAuthStatus( false );
                this._tokenService.removeToken();
                location.reload(true);
            }

            const error = err.error;
            return throwError(error);
        }))
    }
}
