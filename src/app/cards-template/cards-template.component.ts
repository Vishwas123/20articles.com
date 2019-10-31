import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.scss']
})
export class CardsTemplateComponent implements OnInit {

  @Input() article: any;
  youtubeEmbedUrl:string = 'https://www.youtube.com/embed/';
  dangerousUrl: any;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // if(this.article.source.name == 'Youtube.com'){
    //       this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.article.url);
    //       this.videoUrl = this.article.url.split('=')[1];
    //       this.article.youtubeUrl = this.setYoutubeUrl(this.videoUrl);
    //       console.log('article.youtubeUrl '+JSON.stringify(this.article.youtubeUrl, null, 2));
    //     }

    // if(this.article.source.name == 'Youtube.com') {
    //   this.dangerousUrl = 'https://www.youtube.com/embed/'+this.article.url.split('=')[1];
    //   this.article.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
    // }
  }

  // setYoutubeUrl(url : any) {
  //   this.videoUrl = 'https://www.youtube.com/embed/'+url;
  //   return this.videoUrl;
  // }

  // getVideoUrl(url:string) {
  //   this.dangerousUrl = 'https://www.youtube.com/embed/'+url.split('=')[1];
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
  // }

}
