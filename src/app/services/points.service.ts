import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(
    private playerService: PlayerService
  ) { }

  markScore(score: string) {
    let user = this.playerService.getCurrentPlayer();
      user.score += parseInt(score, 10);
  }

  resetScore() {
    let player;
    for(player of this.playerService.players) {
      player.score = 0;
    }
    this.playerService.emitPlayers();
  }

}
