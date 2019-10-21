import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentWeather: any;
  temp: any;
  sunrise: any;
  sunset: any;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.getCurrentWeather.bind(this), this.geoFailure.bind(this));
    };
  }

  async getCurrentWeather(position:any){
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude).subscribe(gtNews => {
      this.currentWeather = gtNews;
      this.temp = (this.currentWeather.main.temp - 273.15)*1.8 + 32;
      let d = new Date();
      d = new Date(this.currentWeather.sys.sunrise*1000);
      this.sunrise = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
      d = new Date(this.currentWeather.sys.sunset*1000);
      this.sunset = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    });
  }

  public geoFailure(){
    console.log("Failed to get the location");
  }

}
