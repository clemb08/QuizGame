import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { PlayerComponent } from './player/player.component';

import * as firebase from 'firebase';
import { HeaderComponent } from './header/header.component';
import { NewUserComponent } from './new-user/new-user.component';
import { OnCreate } from './on-create.directive';
import { HomeComponent } from './home/home.component';

var firebaseConfig = {
  apiKey: "AIzaSyCysLA6NHyOkmQ91mcfRhKgyAc-FHYEBF4",
  authDomain: "quiz-138f0.firebaseapp.com",
  databaseURL: "https://quiz-138f0.firebaseio.com",
  projectId: "quiz-138f0",
  storageBucket: "quiz-138f0.appspot.com",
  messagingSenderId: "262486347151",
  appId: "1:262486347151:web:b14b8dc4f9542fa0124ffa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SingleCategoryComponent,
    ViewQuestionComponent,
    PlayerComponent,
    HeaderComponent,
    NewUserComponent,
    OnCreate,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
