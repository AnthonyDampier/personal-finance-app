import {useState, useEffect} from "react";
import "./MortgageCalc.css";

const MortCalculations = ({
  userInfo,
  userFinancialInfo,
  userMortgageInfo,
}) => {

  const [purchasePrice, setPurchasePrice] = useState(userMortgageInfo.mortgageAmount || 450000);
  const [downPayment, setDownPayment] = useState(userMortgageInfo.downPayment || 100000);
  const [annualInterestRate, setAnnualInterestRate] = useState(userMortgageInfo.interestRate || 3.5);
  const [loanTerm, setLoanTerm] = useState(userMortgageInfo.loanTerm || 30);
  const [ltv, setLTV] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [lifeTimeRepayment, setLifeTimeRepayment] = useState(0);

  // Calculate Monthly Mortgage Payment
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
    const totalInterest = totalPaid - (purchasePrice - downPayment);
    return totalInterest.toFixed(2);
  };

  // Calculate Loan-to-Value Ratio
  const calculateLTV = () => {
    const loanAmount = purchasePrice - downPayment;
    return ((loanAmount / purchasePrice) * 100).toFixed(2);
  };

  const calculateLifeTimeRepayment = (monthlyPayment, loanTerm) => {
    return (monthlyPayment * loanTerm * 12).toFixed(2);
  };

  // Example calculation trigger (can be adjusted based on form handling)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMonthlyPayment(calculateMonthlyPayment());
    setTotalInterest(calculateTotalInterest(calculateMonthlyPayment()));
    setLTV(calculateLTV());
    setLifeTimeRepayment(calculateLifeTimeRepayment(calculateMonthlyPayment(), loanTerm));
  };

  useEffect(() => {

  }, [purchasePrice, downPayment, annualInterestRate, loanTerm, ltv, monthlyPayment, totalInterest, lifeTimeRepayment]);

  return (
    <div className="apple-style-container">
        <form className="mortgage-form" onSubmit={handleSubmit}>
            <h1>Mortgage Calculator</h1>
            <div className="form-group">
                <label for="purchasePrice">Purchase Price:</label>
                <input
                    id="purchasePrice"
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="downPayment">Down Payment:</label>
                <input
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="annualInterestRate">Annual Interest Rate (%):</label>
                <input
                    id="annualInterestRate"
                    type="number"
                    step="0.01"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="loanTerm">Loan Term (years):</label>
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
                        <td>Loan-to-Value:</td>
                        <td>{ltv}%</td>
                    </tr>
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

export default MortCalculations;
