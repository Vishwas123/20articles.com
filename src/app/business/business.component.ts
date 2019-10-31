import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StocksService } from '../services/stocks.service';

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

  constructor(private dataService: DataService, private stocksService: StocksService) { }

  ngOnInit() {
    this.dataService.getBusinessNews().subscribe(businessNews => {
      this.businessNews = businessNews.articles;
      this.businessNews.forEach((article: any) => {
        let myRegex = / - [A-Za-z]/;
        article.title = article.title.split(myRegex)[0];
      });
    });
  }
}
