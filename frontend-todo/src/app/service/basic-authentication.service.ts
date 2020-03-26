import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ConstantsService } from './constants.service';

export class AuthenticationBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  isLogout = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private constant: ConstantsService
  ) {}

  executeAuthenticationService(username: string, password: string) {
    const basicAuthStringHeader =
      'Basic ' + window.btoa(username + ':' + password);
    const myHeader = new HttpHeaders({
      Authorization: basicAuthStringHeader
    });
    return this.httpClient
      .get<AuthenticationBean>(`${this.constant.host()}/basicauth`, {
        headers: myHeader
      })
      .pipe(
        map(data => {
          sessionStorage.setItem(
            this.constant.getAuthenticatedUser(),
            username
          );
          sessionStorage.setItem(
            this.constant.getToken(),
            basicAuthStringHeader
          );
          return data;
        })
      );
  }

  executeJWTAuthenticationService(username: string, password: string) {

    return this.httpClient
      .post<any>(`${this.constant.host()}/authenticate`,
      {username, password})
      .pipe(
        map(data => {
          sessionStorage.setItem(this.constant.getAuthenticatedUser(), username
          );
          sessionStorage.setItem(this.constant.getToken(), `Bearer ${data.token}`);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(this.constant.getAuthenticatedUser());
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(this.constant.getToken());
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.constant.getAuthenticatedUser());
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(this.constant.getAuthenticatedUser());
    sessionStorage.removeItem(this.constant.getToken());
    this.isLogout = true;
    this.router.navigate([`login`]);
  }
}

