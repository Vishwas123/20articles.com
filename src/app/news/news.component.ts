import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { merge } from 'rxjs/operators/merge';
import { Subject } from 'rxjs/Subject';
import { RemoveSourceService } from '../services/remove-source.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private dataService: DataService, private weatherService: WeatherService
    , private removeSource: RemoveSourceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      
      // this.news = merge(initialNews$, update$);
      //Happens when the component gets loaded up
      console.log('Value: '+params.get('countryId'));
      let countryId = params.get('countryId')? params.get('countryId') : 'us';

      this.dataService.getNews(countryId).subscribe(news => {
        this.news = news.articles;
        this.news.forEach((article: any) => {
          article.title = article.title.split(' - ')[0];
        });
      });

      this.getHealthNews(countryId);

      this.getBusinessNews(countryId);

      this.getSportsNews(countryId);

      this.getTechnologyNews(countryId);

      this.getScienceNews(countryId);

      this.getEntertainmentNews(countryId);
    })

    // const initialNews$ = this.getNewsOnce();

    // const update$ = this.update$.pipe(
    //   mergeMap(() => this.getNewsOnce())
    // );

    // this.getGTopWorldNews();

  }

  async getGTopWorldNews() {
    this.dataService.getGTopWorldNews().subscribe(gtNews => {
      this.gtNews = gtNews.articles;
    });
  }

  async getHealthNews(countryId) {
    this.dataService.getHealthNews(countryId).subscribe(healthNews => {
      this.healthNews = healthNews.articles;
      this.healthNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
        if (article.source.name == 'Youtube.com') {
          article.youtubeUrl = 'https://www.youtube.com/embed/' + article.url.split('=');
        }
      });
    });
  }

  async getBusinessNews(countryId) {
    this.dataService.getBusinessNews(countryId).subscribe(businessNews => {
      this.businessNews = businessNews.articles;
      this.businessNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
      });
    });
  }

  async getSportsNews(countryId) {
    this.dataService.getSportsNews(countryId).subscribe(sportsNews => {
      this.sportsNews = sportsNews.articles;
      this.sportsNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
      });
    });

  }

  async getTechnologyNews(countryId) {
    this.dataService.getTechnologyNews(countryId).subscribe(technologyNews => {
      this.technologyNews = technologyNews.articles;
      this.technologyNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
      });
    });
  }

  async getScienceNews(countryId) {
    this.dataService.getScienceNews(countryId).subscribe(scienceNews => {
      this.scienceNews = scienceNews.articles;
      this.scienceNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
      });
    });
  }

  async getEntertainmentNews(countryId) {
    this.dataService.getEntertainmentNews(countryId).subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews.articles;
      this.entertainmentNews.forEach((article: any) => {
        article.title = this.removeLastText(article.title);
        // if(article.source.name == 'Youtube.com'){
        //   article.youtubeUrl = this.setYoutubeUrl(article.youtubeUrl);
        //   console.log('article.youtubeUrl '+JSON.stringify(article.youtubeUrl, null, 2));
        // }

      });
    });
  }

  setYoutubeUrl(url: string) {
    return 'https://www.youtube.com/embed/' + url.split('=')[1];
  }

  removeLastText(title: string) {
    let myRegex = /\s-\s[A-Za-z]/;
    return title.split(myRegex)[0];
  }

  // getNewsOnce(){
  //   return this.dataService.getNews().pipe(take(1));
  // }

}
