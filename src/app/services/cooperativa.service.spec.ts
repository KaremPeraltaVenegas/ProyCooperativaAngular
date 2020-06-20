import { TestBed } from '@angular/core/testing';

import { CooperativaService } from './cooperativa.service';

describe('CooperativaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CooperativaService = TestBed.get(CooperativaService);
    expect(service).toBeTruthy();
  });
});
