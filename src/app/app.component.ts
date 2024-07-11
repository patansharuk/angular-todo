import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
