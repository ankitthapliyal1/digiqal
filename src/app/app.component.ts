import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None, // disable ViewEncapsulation
})
export class AppComponent {
  title = 'digiqul';

  clientHeight:number

  constructor(){
    this.clientHeight = window.innerHeight; 
  }

}
