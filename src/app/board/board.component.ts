import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoriesService } from '../services/categories.service';
import { PlayerService } from '../services/player.service';
import { GameService } from '../services/game.service';
import { User } from '../models/User';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  categories: Category[];
  players: User[] = [];

  constructor(
    public categoriesService: CategoriesService,
    public playerService: PlayerService,
    public gameService: GameService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories.slice();
    this.players = this.playerService.players;
    this.playerService.sortedByPoints(this.players);
  }

  onStart() {
    this.gameService.startGame();
  }




}
