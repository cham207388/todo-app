import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../model/todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  deleted = false;
  deleteMessage: string;
  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodoById('baicham', id).subscribe(
      data => {
        this.deleteMessage = `Todo with id: ${id} has been successfully deleleted!`;
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  refreshTodos() {
    this.todoService.retriveAllTodosByUsername('username').subscribe(
      data => {
        this.todos = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
