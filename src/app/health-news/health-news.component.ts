import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.scss']
})
export class HealthNewsComponent implements OnInit {

  healthNews: Array<any>;

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getHealthNews(params.get('countryId')).subscribe(healthNews => {
        this.healthNews = healthNews.articles;
        this.healthNews.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
        });
      });
    });
  }

}
