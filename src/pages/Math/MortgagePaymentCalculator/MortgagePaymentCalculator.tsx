import PageWrapper from "../../../components/PageWrapper";
import MyContainer from "../../../styling/MyContainer";
import {Typography} from "@mui/material";
import TdAmount from "./TdAmount";
import {Format} from "./TdAmount/TdAmount";

interface Data {
  openingBalance: number;
  prePayment: number;
  amortizationAmount: number;
  interestRate: number;
  amortizationPeriodInYears: number;
  paymentsPerYear: number;
  compoundingPeriodsPerYear: number;
  interestRatePerPayment?: number;
  payment?: number;
}

/**
 * FV=PMT(1+i)((1+i)^N - 1)/i
 * where:
 *   PV = present value
 *   FV = future value
 *   PMT = payment per period
 *   i = interest rate in percent per period
 *   N = number of periods.
 *
 * @param interestRatePerPayment
 * @param paymentsPerYearTimesAmortizationPeriodInYears
 * @param amortizationAmount
 */
// function pmt(interestRatePerPayment: number, paymentsPerYearTimesAmortizationPeriodInYears: number, amortizationAmount: number): number {
function pmt(paymentPerPeriod: number, interestRatePerPayment: number, numberOfPeriods: number): number {
  const i = interestRatePerPayment;
  const N = numberOfPeriods;
  const result = paymentPerPeriod * (1+i) * ((1+i)^N - 1)/i;
  return result;
}

export function MortgagePaymentCalculator() {
  let d: Data = {
    openingBalance: 673068.15,
    prePayment: 0,
    amortizationAmount: 673068.15,
    interestRate: 0.01930,
    amortizationPeriodInYears: 25,
    paymentsPerYear: 12,
    compoundingPeriodsPerYear: 2,
  }

  d.interestRatePerPayment = Math.pow(
    1 + d.interestRate / d.compoundingPeriodsPerYear,
    d.compoundingPeriodsPerYear / d.paymentsPerYear
  ) - 1;

  d.payment = pmt(
    d.interestRatePerPayment,
    d.paymentsPerYear * d.amortizationPeriodInYears,
    d.amortizationAmount
  );

  return (
    <PageWrapper title="Mortgage Payment Calculator">
      <MyContainer>
        <Typography component="h1" variant="primaryH1">
          Mortgage Payment Calculator
        </Typography>

        <div>
          <table>
            <thead>
            <tr>
              <th></th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Opening balance</td>
              <TdAmount value={d.openingBalance}/>
            </tr>
            <tr>
              <td>Less: Pre-payment</td>
              <TdAmount value={d.prePayment}/>
            </tr>
            <tr>
              <td>Amortization amount</td>
              <TdAmount value={d.amortizationAmount}/>
            </tr>
            <tr>
              <td>5-Year closed rate</td>
              <TdAmount fixed={3} format={Format.Percent} value={d.interestRate}/>
            </tr>
            <tr>
              <td>Amortization period in years</td>
              <TdAmount format={Format.Default} value={d.amortizationPeriodInYears}/>
            </tr>
            <tr>
              <td>Payments per year</td>
              <TdAmount format={Format.Default} value={d.paymentsPerYear}/>
            </tr>
            <tr>
              <td>Compounding periods per year</td>
              <TdAmount format={Format.Default} value={d.compoundingPeriodsPerYear}/>
            </tr>
            <tr>
              <td>Interest rate per payment</td>
              <TdAmount fixed={3} format={Format.Percent} value={d.interestRatePerPayment}/>
            </tr>
            <tr>
              <td>Payment</td>
              <TdAmount format={Format.Financial} value={d.payment}/>
            </tr>
            </tbody>
          </table>
        </div>
      </MyContainer>
    </PageWrapper>
  )
}

export default MortgagePaymentCalculator;

function foo(a: any): boolean {
  return a;
}

type TestCondition = number[];

function validate(arg: TestCondition): void {
  const label = arg.toString();
  const doTest = foo(arg) ? 'PASS' : 'FAIL'
  console.log(`${label}: `, doTest);
}

validate([1, 3, 4, 5]);
