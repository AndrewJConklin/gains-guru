import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftDetailsComponent } from './lift-details.component';

describe('LiftDetailsComponent', () => {
  let component: LiftDetailsComponent;
  let fixture: ComponentFixture<LiftDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
