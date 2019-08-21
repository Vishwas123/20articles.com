import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {

  // private fortuneList: any[];

  // pager:any = {};

  // startNum:Number = 0;
  // lastNum:Number = 10;
  // totalPages:Number;

  constructor() { }

  ngOnInit() {
    // this.fortuneList = Array(100).
    // fill(1)
    // .map( (index)=> {
    //   return {
    //     Rank: fortune[index]['title'],
    //     Name: fortune[index]['rank']
    //     Revenue: fortune['Revenues ($M)'].findRevenue()
    //   }
    // })


    // this.fortuneList = fortune;


    // console.log(this.totalPages);
  }

}
