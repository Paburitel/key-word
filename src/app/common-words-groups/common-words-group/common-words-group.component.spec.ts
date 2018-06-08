import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonWordsGroupComponent } from './common-words-group.component';

describe('CommonWordsGroupComponent', () => {
  let component: CommonWordsGroupComponent;
  let fixture: ComponentFixture<CommonWordsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonWordsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonWordsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
