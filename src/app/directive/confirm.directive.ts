import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[tohConfirm]'
})
export class ConfirmDirective {
  @Output() confirm = new EventEmitter<any>();

  constructor() { }
  @HostListener('click') onClick() {
    this.confirm.emit(confirm('Are you sure?'));
  }
}
