import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>()

  title: string;

  onSubmit() {
    const todo = {
      id: uuidv4(),
      title: this.title
    }

    this.todoAdd.emit(todo)
    this.title = ''
  }
}
