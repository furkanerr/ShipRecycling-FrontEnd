import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemiListComponent } from './gemi-list.component';

describe('GemiListComponent', () => {
  let component: GemiListComponent;
  let fixture: ComponentFixture<GemiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
