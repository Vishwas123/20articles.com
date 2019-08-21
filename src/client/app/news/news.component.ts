import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { merge } from 'rxjs/operators/merge';
import { Subject } from 'rxjs/Subject';

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
  update$ = new Subject<void>();
  categoryNames = ['Health', 'Business', 'Sports', 'Tech', 'Entertainment', 'Science'];
  constructor(private dataService:DataService) { }

  ngOnInit() {

    const initialNews$ = this.getNewsOnce();

    const update$ = this.update$.pipe(
      mergeMap(() => this.getNewsOnce())
    );

    // this.news = merge(initialNews$, update$);
      //Happens when the component gets loaded up
    this.dataService.getNews().subscribe(news => {
      this.news = news;
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
    await this.dataService.getGTopWorldNews().subscribe(gtNews => {
      this.gtNews = gtNews.articles;
    });
  }

  async getHealthNews(){
    await this.dataService.getHealthNews().subscribe(healthNews => {
      this.healthNews = healthNews;
    });
  }

  async getBusinessNews(){
    await this.dataService.getBusinessNews().subscribe(businessNews => {
      this.businessNews = businessNews;
    });
  }

  async getSportsNews(){
    await this.dataService.getSportsNews().subscribe(sportsNews => {
      this.sportsNews = sportsNews;
    });

  }

  async getTechnologyNews(){
   await this.dataService.getTechnologyNews().subscribe(technologyNews => {
      this.technologyNews = technologyNews;
    });
  }

  async getScienceNews(){
    await this.dataService.getScienceNews().subscribe(scienceNews => {
      this.scienceNews = scienceNews;
    });
  }

  async getEntertainmentNews(){
    await this.dataService.getEntertainmentNews().subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews;
    });
  }

  getNewsOnce(){
    return this.dataService.getNews().pipe(take(1));
  }

}
