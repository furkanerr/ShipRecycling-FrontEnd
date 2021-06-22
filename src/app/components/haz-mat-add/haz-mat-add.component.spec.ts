import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazMatAddComponent } from './haz-mat-add.component';

describe('HazMatAddComponent', () => {
  let component: HazMatAddComponent;
  let fixture: ComponentFixture<HazMatAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazMatAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazMatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
