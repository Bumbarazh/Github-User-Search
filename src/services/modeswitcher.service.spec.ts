import { TestBed } from '@angular/core/testing';

import { ModeswitcherService } from './modeswitcher.service';

describe('ModeswitcherService', () => {
  let service: ModeswitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeswitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
