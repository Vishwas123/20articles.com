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

  businessNews: Array<any>;
  stocksList: Array<any> = ['MSFT', 'AAPL', 'GOOG', 'AMZN', 'FB'];
  stocksResults: Array<any>;
  results = new Map();

  constructor(private dataService: DataService, private stocksService: StocksService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('Param Vlue: '+params.get('countryId'));
      console.log('Paresd : '+JSON.stringify(params, null, 2));
      this.dataService.getBusinessNews(params.get('countryId')).subscribe(businessNews => {
        this.businessNews = businessNews.articles;
        this.businessNews.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
        });
      });
    });
  }
}
