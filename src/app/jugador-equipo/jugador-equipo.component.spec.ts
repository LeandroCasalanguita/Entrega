import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorEquipoComponent } from './jugador-equipo.component';

describe('JugadorEquipoComponent', () => {
  let component: JugadorEquipoComponent;
  let fixture: ComponentFixture<JugadorEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadorEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JugadorEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
