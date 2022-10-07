import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public items = [];

  public newTask;

  public addToList() {
    if (this.newTask == ''){

    }else {
      this.items.push(this.newTask)
      this.newTask = ''
    }
  }

  public deleteTask(index) {
    this.items.splice(index, 1)
  }

  constructor() { }

  ngOnInit(): void {}

  createTask(){}

  markCompleted(){}

}
