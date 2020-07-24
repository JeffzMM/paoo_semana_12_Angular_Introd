import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioCliComponent } from './exercicio-cli.component';

describe('ExercicioCliComponent', () => {
  let component: ExercicioCliComponent;
  let fixture: ComponentFixture<ExercicioCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
