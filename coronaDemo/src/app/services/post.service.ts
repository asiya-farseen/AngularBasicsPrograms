import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) { }
  getposts(){
    console.log("PostService:getposts")
    return this.httpClient.get<Post[]>(this.url)
  }
  addposts(data:Post):Observable<Post>{
    console.log("PostService:addposts")
    return this.httpClient.post<Post>(this.url,data,httpOptions)
  
}
}