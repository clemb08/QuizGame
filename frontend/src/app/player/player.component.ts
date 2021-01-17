import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { User } from '../models/User';
import { Subscription } from 'rxjs';
import { PlayerService } from '../services/player.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  players: User[];
  playersSubscription: Subscription;


  constructor(
    private playerService: PlayerService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.playersSubscription = this.playerService.playerSubject.subscribe(
      (players: User[]) => {
        this.players = players;
      }
    );
    this.playerService.emitPlayers();
  }

  onRemovePlayer(user: User) {
    this.playerService.removePlayer(user);
  }

  onAddPlayer() {
    this.route.navigate(['newUser']);
  }

  ngOnDestroy(){
    this.playersSubscription.unsubscribe();
  }

}
