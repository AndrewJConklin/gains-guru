import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupExercisesComponent } from './muscle-group-exercises.component';

describe('MuscleGroupExercisesComponent', () => {
  let component: MuscleGroupExercisesComponent;
  let fixture: ComponentFixture<MuscleGroupExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
