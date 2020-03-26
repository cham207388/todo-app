import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from '../../model/todo';
import { ConstantsService } from '../constants.service';
import { WelcomeDataService } from './welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private httpClient: HttpClient, private welcomeDataService: WelcomeDataService, private constant: ConstantsService) {}
  retriveAllTodosByUsername(username: string) {
    return this.httpClient.get<Todo[]>(
      `${this.constant.host()}/${username}/todos`
    );
  }

  deleteTodoById(username: string, id: number) {
    return this.httpClient.delete(
      `${this.constant.host()}/${username}/todos/${id}`
    );
  }

  retriveTodoById(username: string, id: number) {
    return this.httpClient.get<Todo>(
      `${this.constant.host()}/${username}/todos/${id}`
    );
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put(
      `${this.constant.host()}/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post<Todo>(
      `${this.constant.host()}/username/todos`,
      todo
    );
  }
}
