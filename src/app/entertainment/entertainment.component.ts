import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import {  } from '../cards-template/cards-template.component';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEntertainmentNews().subscribe(entertainmentNews => {
      this.entertainmentNews = entertainmentNews.articles;
      this.entertainmentNews.forEach((article: any) => {
        let myRegex = / - [A-Za-z]/;
        article.title = article.title.split(myRegex)[0];
        // if(article.source.name == 'Youtube.com'){
        //   article.youtubeUrl = 'https://www.youtube.com/embed/'+article.url.split('=')[1];
        //   console.log('article.youtubeUrl '+JSON.stringify(article.youtubeUrl, null, 2));
        // }
      });
    });
  }

}
