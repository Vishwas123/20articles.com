import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {

  }

  transform(value: any, args?: any): any {
    if (!value) { return ''; }
    if (value) {
      value = 'https://www.youtube.com/embed/' + value.split('=')[1];
    }
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
