import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  title = "Property Binding";
  ht=50;
  pcolor='red';

  constructor() { }

  ngOnInit(): void {
  }

}
