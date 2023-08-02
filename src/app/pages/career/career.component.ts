import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  jobs = [
    {
      'position': 'Spring Boot Application Developer',

      'location': 'Bengaluru, India',

      'businessArea': 'Technology',

      'type': 'Hybrid'
    },
    {
      'position': 'Spring Boot Application Developer',

      'location': 'Bengaluru, India',

      'businessArea': 'Technology',

      'type': 'Hybrid'
    },
    {
      'position': 'Spring Boot Application Developer',

      'location': 'Bengaluru, India',

      'businessArea': 'Technology',

      'type': 'Hybrid'
    },
    {
      'position': 'Spring Boot Application Developer',

      'location': 'Bengaluru, India',

      'businessArea': 'Technology',

      'type': 'Hybrid'
    },
  ]
 

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
