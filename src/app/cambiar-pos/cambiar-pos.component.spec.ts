import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPosComponent } from './cambiar-pos.component';

describe('CambiarPosComponent', () => {
  let component: CambiarPosComponent;
  let fixture: ComponentFixture<CambiarPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarPosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
