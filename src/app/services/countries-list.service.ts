import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesListService {

  constructor() { }

  countriesList = [
    { name: 'Australia', id: 'au' },
    { name: 'Belgium', id: 'be' },
    { name: 'Canada', id: 'ca' },
    { name: 'China', id: 'cn' },
    { name: 'Colombia', id: 'co' },
    { name: 'India', id: 'in' },
    { name: 'Japan', id: 'jp' },
    { name: 'New Zealands', id: 'nl' },
    { name: 'United Kingdom', id: 'gb' },
    { name: 'United States', id: 'us' }];

    getCountires() {
      return this.countriesList;
    }
}
