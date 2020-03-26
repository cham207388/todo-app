import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    /* const username = 'baicham';
    const password = 'password';
    const basicAuthStringHeader =
      'Basic ' + window.btoa(username + ':' + password); */
    const basicAuthStringHeader = this.basicAuthService.getAuthenticatedToken();
    const user = this.basicAuthService.getAuthenticatedUser();
    if (basicAuthStringHeader && user) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthStringHeader
        }
      });
    }

    return next.handle(request);
  }
}
