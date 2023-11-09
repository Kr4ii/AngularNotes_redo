import { TestBed } from '@angular/core/testing';

import { ReminderbookService } from './reminderbook.service';

describe('ReminderbookService', () => {
  let service: ReminderbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
