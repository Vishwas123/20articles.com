import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StocksService } from '../services/stocks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessNews: Array<any> = [];
  businessVideos: Array<any> = [];
  businessWithNoImage: Array<any> = [];
  stocksList: Array<any> = ['MSFT', 'AAPL', 'GOOG', 'AMZN', 'FB'];
  stocksResults: Array<any>;
  map = new Map();

  constructor(private dataService: DataService, private stocksService: StocksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getBusinessNews(params.get('countryId')).subscribe(businessNews => {
        businessNews.articles.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          // if (!this.map.has(article.title)) {
            this.map.set(article.title, true);
            if (article.source.name == 'Youtube.com') {
              this.businessVideos.push(article);
            } else if (article.urlToImage === null || article.urlToImage == '') {
              this.businessWithNoImage.push(article);
            }
            else {
              this.businessNews.push(article);
            }
          // }
        });
      });
    });
  }
}
