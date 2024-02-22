import { useState } from "react";
import "./VehicleLoanCalculations.css";

const VehicleLoanCalc = ({
  userInfo,
  userFinancialInfo,
  userVehicleInfo, 
}) => {
  const [purchasePrice, setPurchasePrice] = useState(userVehicleInfo.vehicleCost || 30000);
  const [downPayment, setDownPayment] = useState(userVehicleInfo.downPayment || 5000);
  const [annualInterestRate, setAnnualInterestRate] = useState(userVehicleInfo.interestRate || 5.0);
  const [loanTerm, setLoanTerm] = useState(userVehicleInfo.loanTerm || 5); // Vehicle loans often have shorter terms
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [lifeTimeRepayment, setLifeTimeRepayment] = useState(0);

  // Calculate Monthly Payment
  const calculateMonthlyPayment = () => {
    const principal = purchasePrice - downPayment;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;
    return (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);
  };

  // Calculate Total Interest Paid
  const calculateTotalInterest = (monthlyPayment) => {
    const totalPaid = monthlyPayment * loanTerm * 12;
    return (totalPaid - (purchasePrice - downPayment)).toFixed(2);
  };

  // Calculate LifeTime Repayment
  const calculateLifeTimeRepayment = (monthlyPayment) => {
    return (monthlyPayment * loanTerm * 12).toFixed(2);
  };

  // Trigger calculation on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedMonthlyPayment = calculateMonthlyPayment();
    setMonthlyPayment(calculatedMonthlyPayment);
    setTotalInterest(calculateTotalInterest(calculatedMonthlyPayment));
    setLifeTimeRepayment(calculateLifeTimeRepayment(calculatedMonthlyPayment));
  };

  return (
    <div className="apple-style-container">
      <form className="loan-form" onSubmit={handleSubmit}>
        <h1>Vehicle Loan Calculator</h1>
        <div className="form-group">
          <label htmlFor="purchasePrice">Vehicle Price:</label>
          <input
            id="purchasePrice"
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="downPayment">Down Payment:</label>
          <input
            id="downPayment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="annualInterestRate">Annual Interest Rate (%):</label>
          <input
            id="annualInterestRate"
            type="number"
            step="0.01"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <button className="calculate-btn" type="submit">Calculate</button>
      </form>
      <div className="results-table">
        <table>
          <tbody>
            <tr>
              <td>Monthly Payment:</td>
              <td>${monthlyPayment}</td>
            </tr>
            <tr>
              <td>Lifetime Repayment:</td>
              <td>${lifeTimeRepayment}</td>
            </tr>
            <tr>
              <td>Total Interest:</td>
              <td>${totalInterest}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleLoanCalc;
