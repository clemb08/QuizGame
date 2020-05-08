import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { PointsService } from './points.service';
import { QuestionsService } from './questions.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private playerService: PlayerService,
    private pointsService: PointsService,
    private questionService: QuestionsService
  ) { }

  startGame() {
    this.pointsService.resetScore();
    console.log("tout le monde à zéro");
    this.questionService.activeQuestion();
    this.playerService.shutOffPlayer();
    this.playerService.players.forEach (player => {
      if (player.index === 1) {
        player.isActive = true;
        console.log(player.name);
        console.log(player.isActive);
      }
    });
    this.playerService.emitPlayers();
    this.playerService.savePlayers();
  }


}