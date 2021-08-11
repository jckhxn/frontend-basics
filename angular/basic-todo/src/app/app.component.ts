import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //  State
  // Defining a string array and setting it to empty.
  todos: string[] = [];
  todoText = '';

  // Called when component is first init
  ngOnInit() {
    // Grab from localstorage
    const existingTodos = localStorage.getItem('todos');

    this.todos = JSON.parse(existingTodos as string) || [];
  }
  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
