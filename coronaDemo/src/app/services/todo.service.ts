import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Todos } from '../models/todo';
import {Observable} from 'rxjs';
const httpOptions={
  headers: new HttpHeaders({'Content-type':'application/json'})

}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string="https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient:HttpClient) { }
getTodos(){
  console.log("TodoService:getTodos")
  return this.httpClient.get<Todos[]>(this.url)
}
addTodod(data:Todos):Observable<Todos>{
  console.log("TodoService:addTodo")
  return this.httpClient.post<Todos>(this.url,data,httpOptions)
}

}
