import { TestBed } from '@angular/core/testing';

import { EntriesApiIntegrationService } from './entries-api-integration.service';

describe('EntriesApiIntegrationService', () => {
  let service: EntriesApiIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntriesApiIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
