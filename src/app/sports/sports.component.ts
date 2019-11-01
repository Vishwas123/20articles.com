import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsNews:Array<any>

  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getSportsNews(params.get('countryId')).subscribe(scienceNews => {
        this.sportsNews = scienceNews.articles;
        this.sportsNews.forEach((article:any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
        });
      });
    })
  }

}
