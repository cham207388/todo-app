import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() {}

  createBasicAuthenticationHttpHeader() {
    const username = 'baicham';
    const password = 'password';
    const basicAuthStringHeader =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthStringHeader;
  }

  headers() {
    return new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    });
  }
}
