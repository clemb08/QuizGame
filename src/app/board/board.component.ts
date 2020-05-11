import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoriesService } from '../services/categories.service';
import { PlayerService } from '../services/player.service';
import { Subscription } from 'rxjs';
import { GameService } from '../services/game.service';
import { User } from '../models/User';
import { trigger, transition, animate, state, style, query } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { RouterExtService } from '../services/router-ext.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('loader', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500))
    ])
  ],
})
export class BoardComponent implements OnInit {

  showLoad = false;

  categories: Category[];
  players: User[] = [];


  constructor(
    public categoriesService: CategoriesService,
    public playerService: PlayerService,
    public gameService: GameService,
    public toastr: ToastrService,
    public router: RouterExtService
  ) { }

  ngOnInit(): void {
    const prevUrl = this.router.getPreviousUrl();

    this.categories = this.categoriesService.categories.slice();
    this.players = this.playerService.players.slice();
    this.playerService.sortedByPoints(this.players);
    console.log(this.gameService.tour);
    if (this.gameService.tour > 0) {
      this.gameService.stateOfPlayer();
    }
    if (this.gameService.tour != 0 && prevUrl.match(/\/board\/\d{1}\/\d{3}/)) {
      this.gameService.countTour();
    }
    console.log(prevUrl);
  }

  load() {
    this.showLoad = true;
    console.log(this.showLoad);
    setTimeout(() => {
      this.showLoad = false;
      console.log(this.showLoad);
    }, 6000);
  }


  onStart() {
    this.load();
    this.gameService.startGame();
    this.players = this.playerService.players.slice();
    this.playerService.sortedByPoints(this.players);
  }

}
