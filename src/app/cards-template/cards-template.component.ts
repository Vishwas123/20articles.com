import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.scss']
})
export class CardsTemplateComponent implements OnInit {

  @Input() article: any;
  youtubeEmbedUrl:string = 'https://www.youtube.com/embed/';
  dangerousUrl: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.article.source.name == 'Youtube.com') {
      this.dangerousUrl = 'https://www.youtube.com/embed/'+this.article.url.split('=')[1];
      this.article.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
    }
  }

  getVideoUrl(url:string) {
    this.dangerousUrl = 'https://www.youtube.com/embed/'+url.split('=')[1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
  }

}
