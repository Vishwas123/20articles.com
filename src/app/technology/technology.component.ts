import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyNews: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTechnologyNews().subscribe(technologyNews => {
      this.technologyNews = technologyNews.articles;
      this.technologyNews.forEach((article:any) => {
        article.title = article.title.split(' - ')[0];
      });
    });
  }

}
