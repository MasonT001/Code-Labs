import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: ` 
  <div class="todo-app">
  <h1>
  {{title}}
  </h1>

  <app-input (submit)="addItem($event)"></app-input>
  <ul>
     <li *ngFor="let item of todoList">
     <app-item [todoItem]="item"></app-item>
     </li>
  </ul>
  </div>
`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList()
  }

  title = 'To-Do List';

  todoList;

  addItem(title): void {
    this.todoList = this.todoListService.addItem({title})
  }

}
