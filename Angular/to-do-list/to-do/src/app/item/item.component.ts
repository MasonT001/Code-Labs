import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    {{todoItem.title}}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
