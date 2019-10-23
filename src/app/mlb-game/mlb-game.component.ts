import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';


@Component({
  selector: 'app-mlb-game',
  templateUrl: './mlb-game.component.html',
  styleUrls: ['./mlb-game.component.scss']
})
export class MlbGameComponent implements OnInit {

  mlbGames: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getMlbGames().subscribe(mlbData => {
      this.mlbGames = mlbData;
      console.log("MLB GAMES :" + JSON.stringify(this.mlbGames, null, 2));
    });

  }

}
