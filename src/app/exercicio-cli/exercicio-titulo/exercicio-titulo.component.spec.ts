import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTituloComponent } from './exercicio-titulo.component';

describe('ExercicioTituloComponent', () => {
  let component: ExercicioTituloComponent;
  let fixture: ComponentFixture<ExercicioTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
