import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('myTopnav', { static: false }) public mydiv: ElementRef | undefined;

  search = true;


  constructor() { }

  ngOnInit(): void {
  
  //   $(document).ready(function($) {
  //   $('.links').click(function() {
  //     $("#myTopnav").removeClass("responsive");
  //   });
  // }); 
 
  }

  showSearch(val:any){
    this.search = val
    console.log(val)
  }


  myFunction() {
    // var x = document.getElementById("myTopnav");

    var x = document.getElementById('myTopnav') as HTMLElement;


    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
