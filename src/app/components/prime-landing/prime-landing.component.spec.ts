import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeLandingComponent } from './prime-landing.component';

describe('PrimeLandingComponent', () => {
  let component: PrimeLandingComponent;
  let fixture: ComponentFixture<PrimeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
