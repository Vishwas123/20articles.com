import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { shareReplay, retry, catchError } from 'rxjs/operators';

const weatherURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=Virginia,USA&APPID=dcc0efb17be6595de1d0542673002c86'
// const weatherURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=Virginia,USAAPPID='+environment.weatherApi+'';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private currentWeather:any;

  constructor(private http:HttpClient, private dataService:DataService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  getWeather() {
    return this.http.get(weatherURL).pipe(
      shareReplay(CACHE_SIZE),
      retry(1),
      catchError(this.dataService.handleError)
    )
  }
}
