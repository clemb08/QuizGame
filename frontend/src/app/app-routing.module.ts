import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { PlayerComponent } from './player/player.component';
import { componentFactoryName } from '@angular/compiler';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
  },
  { path: 'board',
    component: BoardComponent,
  },
  { path: 'board/:id',
    component: SingleCategoryComponent
  },
  { path: 'board/:id/:type',
    component: ViewQuestionComponent
  },
  { path: 'players',
    component: PlayerComponent
  },
  { path: 'newUser',
    component: NewUserComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
