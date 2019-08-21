import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-long-kitchen-card',
  templateUrl: './long-kitchen-card.component.html',
  styleUrls: ['./long-kitchen-card.component.scss']
})
export class LongKitchenCardComponent implements OnInit {

  // @Input() articles: Object;
  // @Input('categoryName') cName: string;
  @Input() articles: Object;

  constructor() { }

  ngOnInit() {

  }

}
