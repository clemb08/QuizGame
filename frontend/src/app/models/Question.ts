export class Question {

  public url: string;
  public result: string;
  public status: boolean;

  constructor(
      public enonce: string,
      public type: string
    ) {}
  }
