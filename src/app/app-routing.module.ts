import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanCalcComponent } from './loan-calc/loan-calc.component'


const routes: Routes = [
  {
    path: "",
    redirectTo: "loan-calc",
    pathMatch: "full"
  },
  {
    path: "loan-calc",
    component: LoanCalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
