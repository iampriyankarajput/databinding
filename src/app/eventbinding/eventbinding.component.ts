import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  title="eventbinding";
  text:string="";
  myfun(){
    this.text="welcome to website";
  }


  constructor() { }

  ngOnInit(): void {
  }

}
