import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.css`]
})
export class LoginComponent implements OnInit {
  username = ``;
  password = ``;
  errorMessage = `Invalid Credentials`;
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardCodedService: HardCodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    if (this.hardCodedService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate([`welcome`, this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.invalidLogin = false;
          this.router.navigate([`welcome`, this.username]);
        },
        error => {
          this.invalidLogin = true;
        }
      );
  }

  handleJWTAuthLogin() {
    this.basicAuthService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.invalidLogin = false;
          this.router.navigate([`welcome`, this.username]);
        },
        error => {
          this.invalidLogin = true;
        }
      );
  }
}
