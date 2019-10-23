import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { shareReplay, retry, catchError } from 'rxjs/operators';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  mlbApi = "http://lookup-service-prod.mlb.com/json/named.mlb_broadcast_info.bam?start_date='20170415'&end_date='20170417'&season='2019'"

  // mlbData: any;
  constructor(private http: HttpClient, private dataService: DataService) { }

  getMlbGames() {
    return this.http.get(this.mlbApi).pipe(
      shareReplay(CACHE_SIZE),
      retry(1),
      catchError(this.dataService.handleError)
    )
  }

}
