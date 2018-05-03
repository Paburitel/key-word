import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGroupComponent } from './word-group.component';

describe('WordGroupComponent', () => {
  let component: WordGroupComponent;
  let fixture: ComponentFixture<WordGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
