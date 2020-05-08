import { PlayerService } from '../services/player.service';

export class User {

  public score: number;
  public index: number;
  public isActive: boolean;

  constructor(
      public name: string,
      public icon: string,
    ) {
      this.score = 0;
      this.isActive = false;
    }
  }
