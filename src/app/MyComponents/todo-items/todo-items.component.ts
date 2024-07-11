import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  todos: Todo[]

  constructor() {
    this.todos = [
      { id: 1, title: 'learn html' }, { id: 2, title: 'learn css' }, { id: 3, title: 'learn js' }
    ]
  }

  deleteTodo(todo: Todo) {
    console.log(todo)
    this.todos = this.todos.filter((td) => td.id !== todo.id)
  }

  addTodo(todo: Todo) {
    console.log(todo)
    this.todos.push(todo)
  }
}
