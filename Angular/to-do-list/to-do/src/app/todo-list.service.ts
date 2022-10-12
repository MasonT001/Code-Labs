import { Injectable } from "@angular/core";
import { ItemComponent } from "./item/item.component";
import { ToDoListStorageService } from "./todo-list-storage.service";

@Injectable() 

export class TodoListService {

    private todoList;

    constructor(private storage:ToDoListStorageService) { }

      getTodoList(){
        return this.todoList
      }

      addItem(item): void {
        this.todoList.push(item)
      }

}