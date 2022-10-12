import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
  <div class="app-item">
    {{todoItem.title}}
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
