import { Question } from './Question';

export class Category {

  constructor(
      public id: number,
      public title: string,
      public icon: string,
      public quiz: Array<Question>
    ) {}
  }
