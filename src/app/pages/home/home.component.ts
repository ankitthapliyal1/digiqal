import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tweet = [
    { 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s', 'date': '01:12 PM - 07 May 2022' },
    { 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s', 'date': '01:12 PM - 07 May 2022' },
    { 'desc': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s', 'date': '01:12 PM - 07 May 2022' }
  ]

  event = [
    {
      'desc': 'AI Smart Summit  Venue: Noida, Uttar Pradesh',
      'Date': 'June 08-09, 2022'
      , 'img': 'assets/img/robot.png'
    },
    {
      'desc': 'AI Smart Summit  Venue: Noida, Uttar Pradesh',
      'Date': 'June 08-09, 2022'
      , 'img': 'assets/img/robot.png'
    }
  ]

  cookieBox:boolean  = false;
 
  constructor(
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.check()
  }

  check(){
   const checking =   this.cookie.check('data')

   if(checking){
    this.cookieBox = false;
   }else{
    this.cookieBox = true;
   }
  }

  allow(){
    this.cookie.set('data', 'value', {expires:1})
    this.cookieBox = false
  }

  decline(){
    this.cookieBox = false;
  }

  delete(){

    this.cookie.delete('data')
    
  }

}
