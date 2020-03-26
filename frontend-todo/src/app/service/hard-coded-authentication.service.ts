import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {
  isLogout = false;
  constructor(private router: Router, private constants: ConstantsService) { }

  authenticate(username, password) {
    if (username === 'baicham' && password === 'password') {
      sessionStorage.setItem(this.constants.getAuthenticatedUser(), username);
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.constants.getAuthenticatedUser());
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(this.constants.getAuthenticatedUser());
    this.isLogout = true;
    this.router.navigate([`login`]);
  }
}
