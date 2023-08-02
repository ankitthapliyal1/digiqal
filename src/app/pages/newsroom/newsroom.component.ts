import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.scss']
})
export class NewsroomComponent implements OnInit {

  tab:number = 1

  pressRelease= [
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"},
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"},
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"},
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"},
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"},
    {'heading':"Get ready to start your digital journey", "desc":"Find answers to frequently asked questions, learn about our hiring process and get tips on how to applyand prepare for your role doing incredible things and creating long-lasting value.", "date":"19 Jan 2023"}
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

  tabClick(index:any){
    this.tab = index
  }

}
