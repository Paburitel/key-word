import { Word } from './word.model';

export class Group {
  public name: string;
  public description: string;
  private _words: Word[];
  private _wordsArr: Word[][];
  private _size: number;

  constructor(name: string, desc?: string, words?: Word[]) {
    this.name = name;
    this.description = desc;
    this._words = words || [];
    this._size = 5;
    this.wordsArrModel(this._size);
  }

  setCheck(flag: boolean): void {
    this._words.forEach(function (item) {
      item.checked = flag;
    });
    this.wordsArrModel(this._size);
  }
  wordsArrModel(size?: number) {
    if (size === 0 || !size) {
      return this._words;
    }
    const tempArr: any[] = [];
    const tempModel: Word[] = [].concat(this._words);
    while (tempModel.length) {
      tempArr.push(tempModel.splice(0, size));
    }
    return this._wordsArr = tempArr;
  }
  get words() {
    return this._words;
  }
  get wordsArr() {
    return this._wordsArr;
  }
  set words(words: Word[]) {
    this._words = words;
    this.wordsArrModel(this._size);
  }
  set word(word: Word) {
    this._words.push(word);
    this.wordsArrModel(this._size);
  }
  set wordsStr(word: string) {
    this._words = this.rebuildStr(word);
    this.wordsArrModel(this._size);

  }
  set size(s: number) {
    this._size = s;
  }
  get size() {
    return this._size;
  }
  private rebuildStr(str: string) {
    const addedWord: string = str || '';
    const tempArr: Word[] = [].concat(this._words);
    const wordsArr = addedWord.trim().split(',')
      .join('').split(' ')
      .filter((w) => w);
    wordsArr.forEach((w) => {
     if (!this.isSameWord(w, tempArr)) {
       tempArr.push(new Word(w));
     }
    });
    return tempArr;
  }
  private isSameWord(word: string, words: {}[]) {
    return words.some((item: Word) => word === item.text);
  }
}
