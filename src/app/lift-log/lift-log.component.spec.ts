import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftLogComponent } from './lift-log.component';

describe('LiftLogComponent', () => {
  let component: LiftLogComponent;
  let fixture: ComponentFixture<LiftLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
