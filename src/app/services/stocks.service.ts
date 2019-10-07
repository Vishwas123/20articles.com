import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from '../shared/model/stocks';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  // a stream for new assets
  private stocks: any;
  private stocksStream: BehaviorSubject<Stock[]>;
  private currentStockStream: Subject<Stock>;

  // This is where we will store our data in memory
  private dataStore: {
    stocks: Stock[]
  };

  constructor(private http: HttpClient) {
    // initializing data store and streams
    this.dataStore = { stocks: [] };
    this.stocksStream = new BehaviorSubject<Stock[]>([]);
    this.currentStockStream = new Subject<Stock>();
  }

  loadStocks() {
    //request the API to get the latest list of stocks
    this.http.get<Stock[]>('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=' + environment.stocksApi)
      .subscribe(stocks => {
        this.dataStore.stocks = stocks;
        // this will set the list of stocks inside the stream
        this.stocksStream.next(Object.assign({}, this.dataStore).stocks);
      });
  }

  /**
  * getStocks must be called by components that want to get the stream
  */
  getStocks(): Observable<Stock[]> {
    return this.stocksStream.asObservable();
  }

  // getStockPrice(currency: string): Observable<any> {
  //   const response = this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=' + environment.stocksApi);
  //   return response;
  // }

  getStockValues(stockName: string): Observable<any> {

    let soCalledApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol='+stockName+'&apikey=' + environment.stocksApi;
    // Powered by stocksapi 2019
    // if (this.stocks == undefined) {
      this.stocks = this.http.get(soCalledApi);
      return this.stocks;
    // } else {
      // return this.stocks;
    // }

  }
}
