import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenWordsComponent } from './chosen-words.component';

describe('ChosenWordsComponent', () => {
  let component: ChosenWordsComponent;
  let fixture: ComponentFixture<ChosenWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
