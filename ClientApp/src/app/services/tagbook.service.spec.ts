import { TestBed } from '@angular/core/testing';

import { TagbookService } from './tagbook.service';

describe('TagbookService', () => {
  let service: TagbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
