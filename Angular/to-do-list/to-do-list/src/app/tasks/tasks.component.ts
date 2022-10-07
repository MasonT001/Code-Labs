import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [{}]

  constructor() { }

  ngOnInit(): void {}

  createTask(){}

  deleteTask(){}

  markCompleted(){}

}
