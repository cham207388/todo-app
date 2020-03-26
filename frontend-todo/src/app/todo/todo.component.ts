import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../model/todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(this.id, 'baicham','enter a description', false, new Date());

    if (this.id != -1) {
      this.todoService.retriveTodoById('baicham', this.id).subscribe(
        data => {
          this.todo = data;
      });
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('baicham', this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
      },
      error =>{
        console.log('an error occured'+error.error);

      });
    } else {
      this.todoService.updateTodo('baicham', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos']);
        });
    }
  }
}
