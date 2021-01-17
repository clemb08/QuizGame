import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { QuestionsService } from './questions.service';
import {Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  questionsBrain: Array<Question> = this.questionsService.questionsBrain;
  questionsRandom: Array<Question> = this.questionsService.questionsRandom;
  questionsMusic: Array<Question> = this.questionsService.questionsMusic;
  questionsNetflix: Array<Question> = this.questionsService.questionsNetflix;
  questionsCult: Array<Question> = this.questionsService.questionsCult;
  questionsSports: Array<Question> = this.questionsService.questionsSports;




  constructor(
    public questionsService: QuestionsService
  ) { }

  categories: Category[] = [
    {
      id: 1,
      title: "Blind Test",
      icon: '',
      quiz: this.questionsMusic,
    },
    {
      id: 2,
      title: "Random",
      icon: '',
      quiz: this.questionsRandom
    },
    {
      id: 3,
      title: "Culture Générale",
      icon: '',
      quiz: this.questionsCult
    },
    {
      id: 4,
      title: "Brain Teaser",
      icon: '',
      quiz: this.questionsBrain
    },
    {
      id: 5,
      title: "Sports",
      icon: '',
      quiz: this.questionsSports
    },
    {
      id: 6,
      title: "Films & Series",
      icon: '',
      quiz: this.questionsNetflix
    },
  ]

  getCategoryById(id: number) {
    const category = this.categories.find(
      (s) => {
        return s.id === id;
      }
    );
    return category;
  }

  getQuestionByIndex(id: number, type: string) {

    const category = this.getCategoryById(id);
    const question = category.quiz.find(
      (s) => {
        return s.type === type;
      }
    );
    return question;
  }
}
