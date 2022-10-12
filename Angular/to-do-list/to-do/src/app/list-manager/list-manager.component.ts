import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manager',
  template: ` <h1>
  Welcome to {{title}}!
  </h1>

  <app-input (submit)="addItem($event)"></app-input>
  <ul>
     <li *ngFor="let item of todoList">
     <app-item [todoItem]="item"></app-item>
     </li>
  </ul>
`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'todo';

  todoList = [
    {title: 'install NodeJs'},
    {title: 'Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
  ]

  addItem(title: string): void {
    this.todoList.push({ title })
  }

}
