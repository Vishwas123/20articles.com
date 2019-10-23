import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { merge } from 'rxjs/operators/merge';
import { Subject } from 'rxjs/Subject';
import { RemoveSourceService } from '../services/remove-source.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: Observable<Array<any>>;
  healthNews: Array<any>;
  businessNews: Array<any>;
  sportsNews: Array<any>;
  technologyNews: Array<any>;
  entertainmentNews: Array<any>;
  scienceNews: Array<any>;
  gtNews: Array<any>;
  currentWeather: any;
  update$ = new Subject<void>();
  categoryNames = ['Health', 'Business', 'Sports', 'Tech', 'Entertainment', 'Science'];

  constructor(private dataService:DataService, private weatherService:WeatherService
    ,private removeSource:RemoveSourceService) { }

  ngOnInit() {

    const initialNews$ = this.getNewsOnce();

    const update$ = this.update$.pipe(
      mergeMap(() => this.getNewsOnce())
    );

    // this.news = merge(initialNews$, update$);
      //Happens when the component gets loaded up
    this.dataService.getNews().subscribe(news => {
      this.news = news.articles;
      this.news.forEach((article:any) => {
        article.title = article.title.split(' - ')[0];
      });
    });

    this.getHealthNews();

    this.getBusinessNews();

    this.getSportsNews();
    
    this.getTechnologyNews();

    this.getScienceNews();

    this.getEntertainmentNews();

    // this.getGTopWorldNews();

  }

  async getGTopWorldNews(){
    this.dataService.getGTopWorldNews().subscribe(gtNews => {
      this.gtNews = gtNews.articles;
    });
  }

  async getHealthNews(){
    this.dataService.getHealthNews().subscribe(healthNews => {
      this.healthNews = healthNews.articles;
      this.healthNews.forEach((article:any) => {
        article.title = article.title.split(' - ')[0];
      });
    });
  }

  async getBusinessNews(){
    this.dataService.getBusinessNews().subscribe(businessNews => {
      this.businessNews = businessNews.articles;
      this.businessNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });
  }

  async getSportsNews(){
    this.dataService.getSportsNews().subscribe(sportsNews => {
      this.sportsNews = sportsNews.articles;
      this.sportsNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });

  }

  async getTechnologyNews(){
   this.dataService.getTechnologyNews().subscribe(technologyNews => {
      this.technologyNews = technologyNews.articles;
      this.technologyNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });
  }

  async getScienceNews(){
    this.dataService.getScienceNews().subscribe(scienceNews => {
      this.scienceNews = scienceNews.articles;
      this.scienceNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });
  }

  async getEntertainmentNews(){
    this.dataService.getEntertainmentNews().subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews.articles;
      this.entertainmentNews.forEach((article:any) => {
        article.title = article.title.split('-')[0];
      });
    });
  }

  getNewsOnce(){
    return this.dataService.getNews().pipe(take(1));
  }

}
