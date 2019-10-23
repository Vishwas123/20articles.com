import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveSourceService {

  constructor() { }

  public removeSourceName(articles : any) {
    // console.log("Articles are: "+JSON.stringify(articles, null, 2));
    return articles.forEach((article:any) => 
        {
          article.title = article.title.split('-')[0];
        });
  }
}
