import { Component, OnInit } from '@angular/core';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  appTitle: string = environment.appName;
  categoryNames = ['Health', 'Business', 'Tech', 'Science', 'Entertainment', 'Sports'];

  // Politics, Fortune, About, Jobs, Stocks, Like Button

  constructor() { }

  ngOnInit() {
  }

}
