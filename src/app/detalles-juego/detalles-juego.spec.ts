import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJuego } from './detalles-juego';

describe('DetallesJuego', () => {
  let component: DetallesJuego;
  let fixture: ComponentFixture<DetallesJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesJuego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesJuego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
