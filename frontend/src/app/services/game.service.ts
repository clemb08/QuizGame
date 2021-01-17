import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { PointsService } from './points.service';
import { QuestionsService } from './questions.service';
import { User } from '../models/User';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players: User[];
  firstPlayer: User;
  currentPlayer: User;
  tour: number = 0;

  constructor(
    private playerService: PlayerService,
    private pointsService: PointsService,
    private questionService: QuestionsService,
    public toastr: ToastrService
  ) { }

  startGame() {
    this.pointsService.resetScore();
    console.log("tout le monde à zéro");
    this.questionService.activeQuestion();
    this.playerService.shutOffPlayer();
    this.playerService.giveFirst();
    this.currentPlayer = this.playerService.getCurrentPlayer();
    this.firstPlayer = this.playerService.getCurrentPlayer();
    console.log(this.firstPlayer.name);
    console.log(this.currentPlayer.name);
    this.tour++;
    console.log(this.tour);
    setTimeout(() => {
      this.toastr.info('Bienvenue dans le Corona Quiz !!', this.firstPlayer.name + ' débute la partie !');
    },3000);
    this.playerService.emitPlayers();
    this.playerService.savePlayers();
  }

countTour() {
  this.currentPlayer = this.playerService.getCurrentPlayer();
  console.log(this.currentPlayer);
  console.log(this.firstPlayer);
  if (this.firstPlayer.index === this.currentPlayer.index){
    this.tour++;
    this.toastr.info('Prêt pour le round ' + this.tour + " ?", 'La partie continue !!');
    console.log(this.tour);
  }
}

stateOfPlayer() {
  this.currentPlayer = this.playerService.getCurrentPlayer();
  this.players = this.playerService.players;
  this.playerService.sortedByPoints(this.players);
  var lastIndex = this.players.length - 1;
  var firstPlayer = this.players[0];
  var secondPlayer = this.players[1];
  var lastPlayer = this.players[lastIndex];

  if (this.tour === 2) {
    if(this.currentPlayer.score === 0){
      this.toastr.error(`${this.currentPlayer.name}, tu n'as pas eu de chance sur les premières questions !!`, "Tu peux mieux faire !!");
    }
    if (this.currentPlayer.index === firstPlayer.index){
      this.toastr.success(this.currentPlayer.name + ", tu es sorti du premier virage en tête !", "C'est l'occasion de creuser l'écart !");
    }
  }

  if (this.tour === 3) {
    if(this.currentPlayer.score === 0){
      this.toastr.error(this.currentPlayer.name + "Tu n'as pas encore marqué de points!!", "Il est temps de se réveiller !!");
    }
    if (this.currentPlayer.index === firstPlayer.index){
      this.toastr.success(this.currentPlayer.name + ", tu mènes la danse !", "C'est l'occasion de creuser l'écart !");
    }
    if (this.currentPlayer.index === lastPlayer.index){
      this.toastr.error("Ce n'est pas le moment de lâcher prise " + this.currentPlayer.name +" !!", "C'était un début de partie compliqué...");
    }
  }

  if (this.tour === 4) {
    if(this.currentPlayer.index !== firstPlayer.index && firstPlayer.score - this.currentPlayer.score <= 300){
      this.toastr.warning(this.currentPlayer.name + ", " +firstPlayer.name + "et toi êtes au coude à coude", "Ne lâche rien !!");
    }
    if (this.currentPlayer.index === firstPlayer.index && this.currentPlayer.score - secondPlayer.score >= 800){
      this.toastr.success(this.currentPlayer.name + ", tu maîtrises les choses!", "Mais ce n'est pas encore le moment de se relâcher !");
    }
    if (this.currentPlayer.index === lastPlayer.index){
      this.toastr.error(this.currentPlayer.name + ", une question à fort coefficient et tout peut être relancé !", "Rien n'est perdu !");
    }
  }

  if (this.tour === 6) {
    if (firstPlayer.score - lastPlayer.score < 600) {
      this.toastr.info( "Pas d'échappés aujourd'hui, je crois que l'on va assister à un sprint groupé...", "Façon Tour de France !");
    }
    if (this.players[2].score - this.players[3].score > 1000){
      this.toastr.warning(`${this.players[0].name}, ${this.players[1].name} et ${this.players[2].name} pourraient constituer notre podium final aujourd'hui !`, `Qui prend sa chance au Quinté+ ?`)
    }
    if (this.players[lastIndex - 2].score - this.players[lastIndex - 1].score > 800) {
      this.toastr.error(`Le gagnant organisera le prochain quiz... Et le perdant ?`, `${lastPlayer.name}, ${this.players[lastIndex - 1].name}, une idée à proposer ?`);
    }
    if (this.players[lastIndex - 1].score - this.players[lastIndex].score > 800 && this.players[lastIndex - 2].score - this.players[lastIndex - 1].score < 800) {
      this.toastr.error(`Le gagnant organisera le prochain quiz... Et le perdant ?`, `${lastPlayer.name}, une idée à proposer ?`);
    }
  }

  if (this.tour === 7) {
    if (firstPlayer.score - secondPlayer.score > 800) {
      this.toastr.info( firstPlayer.name + " est en train d'imposer un rythme insoutenable", "INTOUCHABLE ! (pas le film)");
    }
  }


}

}
