import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { PlayerService } from '../services/player.service';
import { PointsService } from '../services/points.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

enonce: string = "Question";
type: string = "";
title: string = "Catégorie";
url: string = "";




players = this.playerService.players;
player = this.players.find(
  (playerEL) =>{
    if(playerEL.isActive === true) {
      return true;
    }
  });




modalForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private playerService: PlayerService,
    private pointsService: PointsService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.title = this.categoriesService.getCategoryById(+id).title;
    const type = this.route.snapshot.params['type'];
    this.enonce = this.categoriesService.getQuestionByIndex(+id, type).enonce;
    this.type = this.categoriesService.getQuestionByIndex(+id, type).type;
    this.url = this.categoriesService.getQuestionByIndex(+id, type).url;
    this.initForm();
  }

  initForm() {
    this.modalForm = this.formBuilder.group({
      scores: this.formBuilder.array([]),
    })
  }

  getScores(): FormArray {
    return this.modalForm.get('scores') as FormArray;
  }

  onAddScore() {
    const newScoreControl = this.formBuilder.control(null);
    this.getScores().push(newScoreControl);

  }

  message :string = "Bien joué " + this.player.name + ", tu viens de remporter " + this.route.snapshot.params['type'] + " points !";

  onTrue() {
    let score =this.route.snapshot.params['type'];
    this.pointsService.markScore(score);
    alert(this.message);
    this.router.navigate(["board"]);
    this.playerService.getNextPlayer();
    this.playerService.emitPlayers();
    this.playerService.savePlayers();

  }

  onSubmitForm() {
    const formValue = this.modalForm.value;
    const scores = formValue['scores'] ? formValue['scores'] : [];

    for(let i = 0; i < scores.length; i++) {
      if(scores[i]) {
        this.players[i].score += parseInt(scores[i], 10);
      } else {
        this.players[i].score += 0;
      }
      console.log(this.players[i].name)
      console.log(this.players[i].score)
    }
    this.router.navigate(["board"]);
    this.playerService.getNextPlayer();
    this.playerService.emitPlayers();
    this.playerService.savePlayers();
  }

  //-----------Manage-MODAL------------------

  openFaux(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modalScoreLabel'}).result.then((result) => {
      this.onSubmitForm();
    });
  }
}
