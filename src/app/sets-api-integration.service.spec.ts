import { TestBed } from '@angular/core/testing';

import { SetsApiIntegrationService } from './sets-api-integration.service';

describe('SetsApiIntegrationService', () => {
  let service: SetsApiIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetsApiIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
