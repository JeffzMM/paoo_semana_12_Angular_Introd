import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTabelaComponent } from './exercicio-tabela.component';

describe('ExercicioTabelaComponent', () => {
  let component: ExercicioTabelaComponent;
  let fixture: ComponentFixture<ExercicioTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
