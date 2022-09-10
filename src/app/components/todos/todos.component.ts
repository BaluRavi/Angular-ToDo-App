import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  isavailable = true;
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: true,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });

    // let a:any = 10;
    // let firstname:any = '10';

    // if(a !==  firstname)
    // {
    //   console.log('a and first name are equal');
    // }
    // else
    // {
    //   console.log('a and first name are not equal');
    // }
  }

  //deleteTod
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => {
      return i !== id;
    });
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
