import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { CountriesListService } from '../services/countries-list.service';
import { DataService } from '../data.service';

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

  constructor(private countriesList:CountriesListService, private dataService: DataService) { }

  ngOnInit() {
    this.countries = this.countriesList.getCountires();
  }

  changeCountry(country:any){
    this.currentCountry = country;
    this.dataService.updateCountry(country);
  }

}
