import { Routes } from '@angular/router';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';


export const routes: Routes = [
    {path: '', component: TodoItemsComponent},
    // {path: 'search', component: AddTodoComponent}
];
