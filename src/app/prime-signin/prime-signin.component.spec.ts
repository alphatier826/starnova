import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeSigninComponent } from './prime-signin.component';

describe('PrimeSigninComponent', () => {
  let component: PrimeSigninComponent;
  let fixture: ComponentFixture<PrimeSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
