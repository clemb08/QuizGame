import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: User[] = [];
  playerSubject =  new Subject<User[]>();


  constructor() {
    this.getPlayers();
    this.emitPlayers();
  }

  emitPlayers() {
      this.playerSubject.next(this.players.slice());
  }

  savePlayers() {
    firebase.database().ref('/players').set(this.players);
  }

  addUser(user: User) {
    this.players.push(user);
    this.savePlayers();
    this.emitPlayers();
  }

  getIndex(user: User) {
    user.index = this.players.length + 1;
  }

  getPlayers() {
    firebase.database().ref('/players')
      .on('value', (data: DataSnapshot) => {
          this.players = data.val() ? data.val() : [];
          this.emitPlayers();
        }
      );
  }

  removePlayer(user: User) {
    const playerIndexToRemove = this.players.findIndex(
      (playerEl) => {
        if(playerEl === user) {
          return true;
        }
      }
    );
    this.players.splice(playerIndexToRemove, 1);
    this.savePlayers();
    this.emitPlayers();
  }

  shutOffPlayer() {
    let player;
    for(player of this.players) {
      player.isActive = false;
    }
  }

  getCurrentPlayer() {
    let user: User;
    for(user of this.players) {
      if(user.isActive === true){
        return user;
      }
    }
  }

  getNextPlayer(){
    let user = this.getCurrentPlayer();
    let newPlayer: User;
    if(user.index === (this.players.length)) {
      newPlayer = this.players.find(
        (playerEl) =>{
          if(playerEl.index === 1) {
            return true;
          }
        }
      );
    } else {
      newPlayer = this.players.find(
        (playerEL) =>{
          if(playerEL.index === (user.index + 1)) {
            return true;
          }
        }
      );
    }
    user.isActive = false;
    newPlayer.isActive = true;
    console.log(newPlayer.name);
    console.log(newPlayer.isActive);
  }

  sortedByPoints(arr: User[]) {
    arr.sort(function(a, b) {
      return b.score-a.score;
    });
  }

}
