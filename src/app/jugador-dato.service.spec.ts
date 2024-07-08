import { TestBed } from '@angular/core/testing';

import { JugadorDatoService } from './jugador-dato.service';

describe('JugadorDatoService', () => {
  let service: JugadorDatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadorDatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
