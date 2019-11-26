import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyNews: Array<any> = [];
  techVideos: Array<any> = [];
  techWithNoImage: Array<any> = [];
  map = new Map();
  companiesList: Array<any> = ['MSFT', 'AAPL', 'GOOG', 'AMZN', 'FB'];

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.dataService.getTechnologyNews(params.get('countryId')).subscribe(technologyNews => {
    //     this.technologyNews = technologyNews.articles;
    //     this.technologyNews.forEach((article: any) => {
    //       let myRegex = /\s-\s[A-Za-z]/;
    //       article.title = article.title.split(myRegex)[0];
    //     });
    //   });
    // })

    this.route.paramMap.subscribe(params => {
      this.dataService.getTechnologyNews(params.get('countryId')).subscribe(techNews => {
        techNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          if(!this.map.has(article.title)) {
            this.map.set(article.title, true);
            if (article.source.name == 'Youtube.com') {
              this.techVideos.push(article);
            } else if(article.urlToImage === null || article.urlToImage == '') {
              this.techWithNoImage.push(article);
            }
            else {
              this.technologyNews.push(article);
            }
          }
        });
      });
    })
  }

}
