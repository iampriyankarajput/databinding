import { Component, OnInit } from '@angular/core';
import { SchoolComponent } from '../school/school.component';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  title="Science Component";

  constructor() { }

  ngOnInit(): void {
  }

}
