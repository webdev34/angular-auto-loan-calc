import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoanCalcInterface } from '../app.loan-calc-interface';

@Component({
  selector: 'loan-calc',
  templateUrl: './loan-calc.component.html',
  styleUrls: ['./loan-calc.component.scss']
})
export class LoanCalcComponent implements OnInit {
  public loanCalcForm: FormGroup;
  public iLoanCalc: ILoanCalcInterface;
  public showResults: boolean;

  constructor() { }

  ngOnInit() {
    this.setForm();
  }
 
  public hasError = (controlName: string, errorName: string) =>{
    return this.loanCalcForm.controls[controlName].hasError(errorName);
  }

  public setForm = () => {
    this.loanCalcForm = new FormGroup({
      carPrice: new FormControl(0),
      downPayment: new FormControl(0),
      tradeInValue: new FormControl(0),
      interestRate: new FormControl(0.0),
      years: new FormControl(0),
      months: new FormControl(0)
    });

    this.iLoanCalc = new ILoanCalcInterface();
    this.showResults = false;
  }
 
  public calculateLoan = (calculateLoanFormValue) => {
    if (this.loanCalcForm.valid) {
      this.iLoanCalc.carPrice = calculateLoanFormValue.carPrice;
      this.iLoanCalc.downPayment = calculateLoanFormValue.downPayment;
      this.iLoanCalc.interestRate =  calculateLoanFormValue.interestRate/100/12;
      this.iLoanCalc.duration = (calculateLoanFormValue.years*12) + calculateLoanFormValue.months;
      this.iLoanCalc.trueLoanAmount = calculateLoanFormValue.carPrice - (calculateLoanFormValue.downPayment + calculateLoanFormValue.tradeInValue);

      let today = new Date();
      this.iLoanCalc.paymentEndDate = new Date(today.setMonth(today.getMonth() + this.iLoanCalc.duration));

      if(this.iLoanCalc.duration == 0){
        alert('Please add the year(s) and/or month(s) of the loan');
        return false;
      }

      if(this.iLoanCalc.interestRate == 0){
        //Simple math 
        this.iLoanCalc.monthlyPayment = this.iLoanCalc.trueLoanAmount/this.iLoanCalc.duration;
      }
      else{
        //Figuring out the interest
        this.iLoanCalc.interest = 1;
        for (var i = 0; i < this.iLoanCalc.duration; i++) {
          this.iLoanCalc.interest = this.iLoanCalc.interest * (1 + this.iLoanCalc.interestRate);
        }   

        this.iLoanCalc.monthlyPayment = (this.iLoanCalc.trueLoanAmount * this.iLoanCalc.interest * this.iLoanCalc.interestRate) / (this.iLoanCalc.interest - 1);
      }
      this.iLoanCalc.monthlyPayment = this.iLoanCalc.monthlyPayment.toFixed(2);
      this.showResults = true;
    }
  }
}
