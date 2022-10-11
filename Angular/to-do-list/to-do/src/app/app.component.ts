import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
    Welcome to {{title}}!
    </h1>

    <app-input></app-input>
    <ul>
       <li *ngFor="let item of todoList">
       {{item.title}}
       </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "To Do List"

  todoList = [
    {title: 'install NodeJs'},
    {title: 'Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
  ]
}
