import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './jobs/jobs.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { TechnologyComponent } from './technology/technology.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'news', component: NewsComponent },
  {path: 'jobs', component: JobsComponent},
  {path:'developer',component:WorkExperienceComponent},
  {path:'health', component:HealthNewsComponent},
  {path:'tech', component:TechnologyComponent},
  {path:'science', component:ScienceComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'sports', component:SportsComponent},
  {path: 'business', component: BusinessComponent},
  {path: '**', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
