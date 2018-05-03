import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsGroupsComponent } from './words-groups.component';

describe('WordsGroupsComponent', () => {
  let component: WordsGroupsComponent;
  let fixture: ComponentFixture<WordsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
