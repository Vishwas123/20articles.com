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

  healthNews: Array<any> = [];
  healthVideos: Array<any> = [];
  healthWithNoImages: Array<any> = [];
  map = new Map();

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getHealthNews(params.get('countryId')).subscribe(healthNews => {
        healthNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          if (!this.map.has(article.title)) {
            this.map.set(article.title, true);
            if (article.source.name == 'Youtube.com') {
              this.healthVideos.push(article);
            } else if (article.urlToImage === null || article.urlToImage == '') {
              this.healthWithNoImages.push(article);
            }
            else {
              this.healthNews.push(article);
            }
          }
        });
      });
    });
  }

}
