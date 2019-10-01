import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  scienceNews: Array<any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getScienceNews().subscribe(scienceNews => {
      this.scienceNews = scienceNews.articles;
    });
  }

}
