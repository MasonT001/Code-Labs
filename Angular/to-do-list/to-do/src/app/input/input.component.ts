import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input>
    <button>Save</button>
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

  changeTitle(newTitle: string){
    this.title = newTitle;
  }

}
