import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.scss']
})
export class CardsTemplateComponent implements OnInit {

  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
