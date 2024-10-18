import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgreso2Component } from './barra-progreso-2.component';

describe('BarraProgreso2Component', () => {
  let component: BarraProgreso2Component;
  let fixture: ComponentFixture<BarraProgreso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraProgreso2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraProgreso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
