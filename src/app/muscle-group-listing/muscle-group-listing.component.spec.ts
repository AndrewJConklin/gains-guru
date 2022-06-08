import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupListingComponent } from './muscle-group-listing.component';

describe('MuscleGroupListingComponent', () => {
  let component: MuscleGroupListingComponent;
  let fixture: ComponentFixture<MuscleGroupListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
