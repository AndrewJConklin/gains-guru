import { TestBed } from '@angular/core/testing';

import { WgerApiIntegrationService } from './wger-api-integration.service';

describe('WgerApiIntegrationService', () => {
  let service: WgerApiIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WgerApiIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
