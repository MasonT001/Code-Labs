import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() submit: EventEmitter<string> = new EventEmitter();
  
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void{
    this.submit.emit(newTitle);
  }

}
