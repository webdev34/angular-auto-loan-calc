export class ILoanCalcInterface {
    carPrice: number;
    downPayment: number;
    tradeInValue: number;
    interestRate: number;
    duration: number;
    trueLoanAmount: number;
    monthlyPayment: string | number;
    interest: number;
    
    paymentEndDate: Date;
}