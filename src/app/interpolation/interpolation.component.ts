import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  items=[
    {id:1,name:'pen',price:15},
    {id:2,name:'pencil',price:10},
    {id:3,name:'eraser',price:10},
    {id:4,name:'sharpner',price:5},
    {id:5,name:'copy',price:50}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
