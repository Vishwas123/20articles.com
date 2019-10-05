import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;
  healthNews: any;
  businessNews: any;
  sportsNews: any;
  technologyNews: any;
  entertainmentNews: any;
  scienceNews: any;
  gtNews: any;
  // categoryNames = ['Health', 'Business', 'Sports', 'Tech', 'Entertainment', 'Science'];
  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getNews().subscribe(news => {
      this.news = news.articles;
    });

    this.getHealthNews();

    this.getBusinessNews();

    this.getSportsNews();
    
    this.getTechnologyNews();

    this.getScienceNews();

    this.getEntertainmentNews();

    this.getGTopWorldNews();

  }

  getGTopWorldNews(){
    this.dataService.getGTopWorldNews().subscribe(gtNews => {
      this.gtNews = gtNews.articles;
    });
  }

  getHealthNews(){
    this.dataService.getHealthNews().subscribe(healthNews => {
      this.healthNews = healthNews.articles;
    });
  }

  getBusinessNews(){
    this.dataService.getBusinessNews().subscribe(businessNews => {
      this.businessNews = businessNews.articles;
    });
  }

  getSportsNews(){
    this.dataService.getSportsNews().subscribe(sportsNews => {
      this.sportsNews = sportsNews.articles;
    });

  }

  getTechnologyNews(){
   this.dataService.getTechnologyNews().subscribe(technologyNews => {
      this.technologyNews = technologyNews.articles;
    });
  }

  getScienceNews(){
    this.dataService.getScienceNews().subscribe(scienceNews => {
      this.scienceNews = scienceNews.articles;
    });
  }

  getEntertainmentNews(){
    this.dataService.getEntertainmentNews().subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews.articles;
    });
  }

}
