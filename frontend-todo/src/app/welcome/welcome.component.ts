import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage = `welcome to my full-stack application. Angular and Springboot.`;
  pathVariable = '';
  message = '';
  called = false;

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.pathVariable = this.route.snapshot.params.name;
    this.pathVariable =
      this.pathVariable.charAt(0).toUpperCase() + this.pathVariable.slice(1);
  }

  getWelComeMessage(message: string) {
    this.welcomeService.executeHelloWorldBeanService(message).subscribe(
      response => {
        this.called = true;
        this.message = this.handleSuccessfulResponse(response);
      },
      error => {
        this.message = this.handleErrorResponse(error);
      }
    );
  }

  handleSuccessfulResponse(response) {
    return response.message;
  }

  handleErrorResponse(error) {
    return error.error.message;
  }
}
