import { TestBed, inject } from '@angular/core/testing';

import { GroupModelService } from './group-model.service';

describe('GoupModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupModelService]
    });
  });

  it('should be created', inject([GroupModelService], (service: GroupModelService) => {
    expect(service).toBeTruthy();
  }));
});
