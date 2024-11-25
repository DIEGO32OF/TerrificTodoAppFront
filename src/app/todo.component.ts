import { Component, OnInit } from '@angular/core';
import { TodoService } from './Service/todo.service';
import { Todo } from './Interface/todo-interface';
import { TodoFilters } from './Utils/filters';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">ToDo List</h1>
      <form (ngSubmit)="addTodo()">
        <input [(ngModel)]="newTodoTitle" placeholder="Add a new task" name="title" class="border p-2 rounded w-full">
        <button class="bg-blue-500 text-white py-1 px-3 mt-2 rounded">Add</button>
      </form>
      <ul>
        <li *ngFor="let todo of todos" class="flex justify-between items-center p-2 border-b">
          <div>
            <input type="checkbox" [(ngModel)]="todo.completed" (change)="updateTodo(todo)">
            <span [class.line-through]="todo.completed">{{ todo.title }}</span>
          </div>
          <button (click)="deleteTodo(todo.id)" class="text-red-500">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService, ) {
    
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo({ title: this.newTodoTitle, completed: false }).subscribe((todo) => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      });
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }
}
