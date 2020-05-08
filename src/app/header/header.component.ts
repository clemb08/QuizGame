import { Component, OnInit } from '@angular/core';

import { PlayerComponent } from '../player/player.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onPlayers() {
    this.route.navigate(["players"]);
  }

  onGame() {
    this.route.navigate(["board"]);
  }
}
