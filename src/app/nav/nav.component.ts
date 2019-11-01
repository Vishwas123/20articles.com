import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CountriesListService } from '../services/countries-list.service';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  appTitle: string = environment.appName;
  categoryNames = ['Health', 'Business', 'Tech', 'Science', 'Entertainment', 'Sports'];
  countries: any;
  currentCountry: any = {name:'United States', id:'us'};

  // Politics, Fortune, About, Jobs, Stocks, Like Button

  constructor(private countriesList:CountriesListService, private dataService: DataService, 
    private router:Router, private active:ActivatedRoute) { }

  ngOnInit() {
    this.countries = this.countriesList.getCountires();
    if(this.router.url.split('/')[1] != 'us') {
      this.currentCountry.id = this.router.url.split('/')[1];
    }
  }

  changeCountry(country:any){
    this.currentCountry = country;
    // this.router.url gets the current activated route.
    let url = this.router.url.split('/')[1];
    this.router.navigate([url, country.id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    this.dataService.updateCountry(country);
  }

}
