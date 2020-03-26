import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConstantsService } from '../constants.service';
import { HeaderService } from '../header.service';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root"
})

/**
 *
 */
export class WelcomeDataService {
  constructor(
    private httpClient: HttpClient,
    private constant: ConstantsService,
    private header: HeaderService
  ) {}

  executeHelloWorldBeanService(message: string) {
    return this.httpClient.get<HelloWorldBean>(
      `${this.constant.host()}/hello-world/${message}`,
      { headers: this.header.headers() }
    );
  }
}
