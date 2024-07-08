import { TestBed } from '@angular/core/testing';

import { EquipoGestService } from './equipo-gest.service';

describe('EquipoGestService', () => {
  let service: EquipoGestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoGestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
