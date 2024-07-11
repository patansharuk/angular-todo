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
  localTodos: string | null;
  todos: Todo[]

  constructor() {
    this.todos = []
    setTimeout(()=>{
      this.localTodos = localStorage.getItem('todos');
      if(this.localTodos === null){
        this.todos = []
      }else{
        this.todos = JSON.parse(this.localTodos)
      }
    },1000)
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((td) => td.id !== todo.id)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
