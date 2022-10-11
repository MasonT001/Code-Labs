import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
   template: `
     <input [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement>
     <button (click)="changeTitle(inputElement.value)">Save</button>
     <p>The title is: {{title}}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';

  constructor() { 
    this.changeTitle('My First Angular App')
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void{
    this.title = newTitle;
  }

}
