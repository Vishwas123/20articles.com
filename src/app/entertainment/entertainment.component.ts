import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import {  } from '../cards-template/cards-template.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews: Array<any>;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getEntertainmentNews(params.get('countryId')).subscribe(entertainmentNews => {
        this.entertainmentNews = entertainmentNews.articles;
        this.entertainmentNews.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
          // if(article.source.name == 'Youtube.com'){
          //   this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(article.url);
          //   this.videoUrl = article.url.split('=')[1];
          //   article.youtubeUrl = this.setYoutubeUrl(this.videoUrl);
          //   console.log('article.youtubeUrl '+JSON.stringify(article.youtubeUrl, null, 2));
          // }
        });
      });
    })

  }

  setYoutubeUrl(url: any) {
    this.videoUrl = 'https://www.youtube.com/embed/' + url;
    return this.videoUrl;
  }

}
