import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  course:string="Angular spring spring boot"
  a:number=0.259;
  b:number=1.3495;
  today=new Date()
  pi:number=3.1415926;

  constructor() { }

  ngOnInit(): void {
  }

}
