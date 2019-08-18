import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerElements: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.footerElements = [{ name: 'Developer', linkName: 'about' },
    // { name: 'Disclaimer', linkName: 'disclaimer' },
    // { name: 'Technical Stack Used', linkName: 'stack' }
  ];
  }

}
