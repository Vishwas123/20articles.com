import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  //apikey from stocksAPI kcmcllrfantn9fffef3g1l5dllh909o5sitmntrc

  stocksList:Observable<any>;

  constructor(private stocksService:StocksService) { }

  ngOnInit() {
  }

}
