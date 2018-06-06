import { Injectable,  EventEmitter,  Output } from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }
  loaderChangeState = new EventEmitter<boolean>();
  startLoader() {
    this.loaderChangeState.emit(true);
  }
  stopLoader() {
    this.loaderChangeState.emit(false);
  }
}
