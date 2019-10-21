import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { shareReplay, retry, catchError } from 'rxjs/operators';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL:string = 'http://api.openweathermap.org/data/2.5/weather?APPID=dcc0efb17be6595de1d0542673002c86&';

  constructor(private http:HttpClient, private dataService:DataService) { }

  getWeather(latitude:number, longitude:number) {
    this.weatherURL = this.weatherURL+'lat='+latitude+'&lon='+longitude;
    return this.http.get(this.weatherURL).pipe(
      shareReplay(CACHE_SIZE),
      retry(1),
      catchError(this.dataService.handleError)
    )
  }
}
