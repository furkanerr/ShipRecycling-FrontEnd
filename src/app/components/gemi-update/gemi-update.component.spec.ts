import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemiUpdateComponent } from './gemi-update.component';

describe('GemiUpdateComponent', () => {
  let component: GemiUpdateComponent;
  let fixture: ComponentFixture<GemiUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemiUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
