import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  scienceNews: Array<any>;

  constructor(private dataService: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getScienceNews(params.get('countryId')).subscribe(scienceNews => {
        this.scienceNews = scienceNews.articles;
        this.scienceNews.forEach((article: any) => {
          let myRegex = /\s-\s[A-Za-z]/;
          article.title = article.title.split(myRegex)[0];
        });
      });
    })
  }
}
