import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupEditComponent } from './word-group-edit.component';

describe('WordGroupEditComponent', () => {
  let component: WordGroupEditComponent;
  let fixture: ComponentFixture<WordGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
