import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Question } from '../models/Question';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  title: string = "Category";
  icon: string = "Icon";
  quiz: Array<Question>;
  questionChoose: Question;


  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.title = this.categoriesService.getCategoryById(+id).title;
    this.icon = this.categoriesService.getCategoryById(+id).icon;
    this.quiz = this.categoriesService.getCategoryById(+id).quiz;
  }

  onChoice(type: string) {
    this.questionChoose = this.quiz.find(
      (questionEl) => {
        if(questionEl.type === type){
          return true;
        }
      }
    );
    this.questionChoose.status = false;
  }

}
