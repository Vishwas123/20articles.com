import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import {  } from '../cards-template/cards-template.component';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews:Array<any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getEntertainmentNews().subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews.articles;
      this.entertainmentNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });
  }

}
