import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaComponent } from './components/corona/corona.component';
import {HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent,
    TodosComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
