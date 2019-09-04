import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalcComponent } from './loan-calc.component';

describe('LoanCalcComponent', () => {
  let component: LoanCalcComponent;
  let fixture: ComponentFixture<LoanCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
