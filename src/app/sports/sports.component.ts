import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  private sportsNews: Array<any> = [];
  private sportsVideos: Array<any> = [];
  private sportsWithNoImage: Array<any> = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getSportsNews(params.get('countryId')).subscribe(scienceNews => {
        scienceNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          if (article.source.name == 'Youtube.com') {
            this.sportsVideos.push(article);
          } else if(article.urlToImage === null || article.urlToImage == '') {
            this.sportsWithNoImage.push(article);
          }
          else {
            this.sportsNews.push(article);
          }
        });
      });
    })
  }

}
