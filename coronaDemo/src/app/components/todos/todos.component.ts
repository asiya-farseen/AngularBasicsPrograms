import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/models/todo';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todos[]=[]
  constructor(private toodService:TodoService) { }

  ngOnInit(): void {
    console.log("TodosComponent:ngOnInit")
    this.toodService.getTodos().subscribe(todos=>{
      this.todos=todos
    })
  }
  addTodo(todo:NgForm):void{
    console.log(todo.value)
    this.toodService.addTodod(todo.value).subscribe(todo=>{
      console.log('add todo###')
      console.log(todo)
      this.todos.push(todo)
    })
  }

}
