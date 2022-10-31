import { Component, OnInit } from '@angular/core';
import { PostService} from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts:Post[]=[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {

    console.log("PostsComponent:ngOnInit")
  //  this.todoService.getTodos().subscribe(todos=>console.log(todos))

    this.postService.getposts().subscribe(posts=>{
      this.posts=posts
  })
}

  addposts(post:NgForm):void{
    console.log(post.value)
    this.postService.addposts(post.value).subscribe(posts=>{
      console.log('add posts###')
      console.log(post)
      /**
      let todoupd = {
        userId:todo.userId,
        id: todo.id,
        title: todo.title,
        completed: todo.completed.toString()
      }
       */
      this.posts.push(posts)
      
    }
      )
  }
     
}

