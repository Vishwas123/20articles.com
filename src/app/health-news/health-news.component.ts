import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.scss']
})
export class HealthNewsComponent implements OnInit {

  healthNews:Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHealthNews().subscribe(healthNews => {
      this.healthNews = healthNews.articles;
    });
  }

}
