import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   d = new Date();

   year:any

  constructor() { }

  ngOnInit(): void {
    this.year = this.d.getFullYear();
  }

}
