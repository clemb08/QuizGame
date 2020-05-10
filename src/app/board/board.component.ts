import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoriesService } from '../services/categories.service';
import { PlayerService } from '../services/player.service';
import { Subscription } from 'rxjs';
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
    this.players = this.playerService.players.slice();
    this.playerService.sortedByPoints(this.players);
  }

tirage() {
  let loading = document.getElementById("loading");
  let title = document.createElement("div");
  let player = document.getElementById("player");

  title.setAttribute("id", "load");
  title.style.display = "block";
  title.style.position = "relative";
  title.style.textAlign = "center";
  title.style.fontSize = "1.5em";
  title.style.color = "blue";
  title.style.zIndex = "3";
  title.style.right = "0%";
  title.style.top = "0px";
  title.innerHTML = "<p>Tirage au sort</p>";

  player.style.opacity = "0.33";
  player.style.transition = "2s ease-in-ease-out";

  loading.appendChild(title);
  loading.style.visibility = "visible";

  setTimeout(function() {
    let loading = document.getElementById("loading");
    let title = document.getElementById("load");
    let player = document.getElementById("player");
    loading.removeChild(title);
    loading.style.visibility = "hidden";
    player.style.opacity = "1";
  }, 6000);
}

  onStart() {
    this.tirage();
    this.gameService.startGame();
    this.players = this.playerService.players.slice();
    this.playerService.sortedByPoints(this.players);
  }

}
