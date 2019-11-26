import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews: Array<any> = [];
  entertainmentVideos: Array<any> = [];
  entertianmentWithNoImages: Array<any> = [];
  map = new Map();
  videoUrl: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getEntertainmentNews(params.get('countryId')).subscribe(entertainmentNews => {
        entertainmentNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          if (!this.map.has(article.title)) {
            this.map.set(article.title, true);
            if (article.source.name == 'Youtube.com') {
              this.entertainmentVideos.push(article);
            } else if (article.urlToImage === null || article.urlToImage == '') {
              this.entertianmentWithNoImages.push(article);
            }
            else {
              this.entertainmentNews.push(article);
            }
          }
        });
      });
    })
  }
}
