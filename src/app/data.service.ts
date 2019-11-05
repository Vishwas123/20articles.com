import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, shareReplay, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { timer } from 'rxjs/observable/timer';
import { environment } from '../environments/environment';
import { News } from '../app/shared/news';

const apiURL: string = 'https://newsapi.org/v2/top-headlines?pageSize=50&apiKey=' + environment.newsApi + '&country=';
const gApiURL: string = 'https://gnews.io/api/v3/topics/world?token=1f7fb4c0c3bd774d67696915a2bfed26';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000000;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private cache$: Observable<any>;
  private healthNewsCache$: any;
  private businessNewsCache$: Observable<any>;
  private sportsNewsCache$: Observable<any>;
  private entertainmentNewsCache$: Observable<any>;
  private technologyNewsCache$: Observable<any>;
  private scienceNewsCache$: Observable<any>;
  private gtNewsCache$: Observable<any>;
  private countryId: any = 'us';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log('Error Message ' + errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log('Server Error Message ' + errorMessage);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getNews(id) {

    if(this.countryId != id) {
      this.updateCountry(id);
    }

    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
      this.cache$ = timer$.pipe(retry(1), catchError(this.handleError),
        switchMap(_ => this.requestNews(apiURL + id)),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestNews(newsApi) {
    return this.http.get(decodeURIComponent(newsApi))
      .pipe(
        map(response => response)
      );
  }

  //HttpClient API get() method => Fetch Top News Articles from GNews
  getGTopWorldNews() {
    if (!this.gtNewsCache$) {
      this.gtNewsCache$ = this.http.get<News>(gApiURL)
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.gtNewsCache$;
  }

  // HttpClient API get() method => Fetch Health News Articles list
  getHealthNews(id) {
    if(this.countryId != id) {
      this.updateCountry(id);
      
      // this.updateNavCountry()
    }
    if (!this.healthNewsCache$) {
      this.healthNewsCache$ = this.http.get<News>(apiURL + id + '&category=health')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.healthNewsCache$;
  }

  // HttpClient API get() method => Fetch Business News Articles list
  getBusinessNews(id) {
    if(this.countryId != id) {
      console.log('Updating the country '+id);
      this.updateCountry(id);
    }
    if (!this.businessNewsCache$) {
      this.businessNewsCache$ = this.http.get<News>(apiURL + id + '&category=business')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.businessNewsCache$;
  }

  // HttpClient API get() method => Fetch Sports News Articles list
  getSportsNews(id) {
    if(this.countryId != id) {
      this.updateCountry(id);
    }
    if (!this.sportsNewsCache$) {
      this.sportsNewsCache$ = this.http.get<News>(apiURL + id + '&category=sports')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.sportsNewsCache$;
  }

  // HttpClient API get() method => Fetch Entertainment News Articles list
  getEntertainmentNews(id) {
    if(this.countryId != id) {
      this.updateCountry(id);
    }
    if (!this.entertainmentNewsCache$) {
      this.entertainmentNewsCache$ = this.http.get<News>(apiURL + id + '&category=entertainment')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.entertainmentNewsCache$;
  }

  // HttpClient API get() method => Fetch Technology News Articles list
  getTechnologyNews(id) {
    if(this.countryId != id) {
      this.updateCountry(id);
    }
    if (!this.technologyNewsCache$) {
      this.technologyNewsCache$ = this.http.get<News>(apiURL + id + '&category=technology')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.technologyNewsCache$;
  }

  // HttpClient API get() method => Fetch Science News Articles list
  getScienceNews(id) {
    if(this.countryId != id) {
      this.updateCountry(id);
    }
    if (!this.scienceNewsCache$) {
      this.scienceNewsCache$ = this.http.get<News>(apiURL + id + '&category=science')
        .pipe(
          shareReplay(CACHE_SIZE),
          retry(1),
          catchError(this.handleError)
        )
    }
    return this.scienceNewsCache$;
  }

  updateCountry(country: any) {
    this.countryId = country.id;
    this.cache$ = null;
    this.healthNewsCache$ = null;
    this.businessNewsCache$ = null;
    this.sportsNewsCache$ = null;
    this.entertainmentNewsCache$ = null;
    this.technologyNewsCache$ = null;
    this.scienceNewsCache$ = null;
  }

  // updateNavCountry(country:any) {

  // }
  getCurrentCountry() {
    return this.countryId;
  };
}
