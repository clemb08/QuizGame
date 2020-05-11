import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz';


  constructor(
    private playerService: PlayerService,
    private gameService: GameService
  ) {
    this.playerService.getPlayers();
  }

}
