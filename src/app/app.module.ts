import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './jobs/jobs.component';
import { FortuneComponent } from './fortune/fortune.component';
import { FooterComponent } from './footer/footer.component';
import { StocksComponent } from './stocks/stocks.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { TechnologyComponent } from './technology/technology.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { CardsTemplateComponent } from './cards-template/cards-template.component';
import { BusinessComponent } from './business/business.component';
import { LongKitchenCardComponent } from './long-kitchen-card/long-kitchen-card.component';
import { WeatherComponent } from './weather/weather.component';
import { MlbGameComponent } from './mlb-game/mlb-game.component';
import { CountriesComponent } from './countries/countries.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { PoliticsComponent } from './politics/politics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NewsComponent,
    JobsComponent,
    FortuneComponent,
    FooterComponent,
    StocksComponent,
    WorkExperienceComponent,
    HealthNewsComponent,
    TechnologyComponent,
    ScienceComponent,
    EntertainmentComponent,
    SportsComponent,
    CardsTemplateComponent,
    BusinessComponent,
    LongKitchenCardComponent,
    WeatherComponent,
    MlbGameComponent,
    CountriesComponent,
    YoutubePipe,
    PoliticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
