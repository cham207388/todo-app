import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private basicUrl = 'http://localhost:9090/users';
  private token = 'token';
  private authenticatedUser = 'authenticatedUser';

  constructor() {}

  host() {
    return this.basicUrl;
  }
  getToken() {
    return this.token;
  }
  getAuthenticatedUser() {
    return this.authenticatedUser;
  }
}
