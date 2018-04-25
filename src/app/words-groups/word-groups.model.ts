import { Word } from './word.model';

export class Group {
  public name: string;
  public description: string;
  public words: Word[];

  constructor(name: string, desc: string, words: Word[]) {
    this.name = name;
    this.description = desc;
    this.words = words;
  }
}
