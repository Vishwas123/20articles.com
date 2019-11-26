import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {

  public politicsNews: Array<any> = [];
  public politicalVideos: Array<any> = [];
  public politicalWithNoImages: Array<any> = [];
  map = new Map();

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getPoliticsNews(params.get('countryId')).subscribe(politicalNews => {
        politicalNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          if (!this.map.has(article.title)) {
            this.map.set(article.title, true);
            if (article.source.name == 'Youtube.com') {
              this.politicalVideos.push(article);
            } else if (article.urlToImage === null || article.urlToImage == '') {
              this.politicalWithNoImages.push(article);
            }
            else {
              this.politicsNews.push(article);
            }
          }
        });
      });
    });
  }

}
