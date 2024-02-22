import React, { useState } from "react";
import "./Retirement.css";

const RetirementCalculator = ({
  userInfo,
  userFinancialInfo,
  userVehicleInfo, // Adjusted for vehicle loan context
}) => {
  const averageAnnualReturnRate = 7;

  const [form, setForm] = useState({
    currentAge: userInfo.age,
    retirementAge: userFinancialInfo.retirementAge,
    currentSavings: userFinancialInfo.currentSavings,
    annualSavings: userFinancialInfo.annualSavings,
    annualReturnRate: averageAnnualReturnRate, // This value is not provided in the userFinancialInfo object
  });
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: parseFloat(value),
    }));
  };

  const calculateSavings = (e) => {
    e.preventDefault();

    const years = form.retirementAge - form.currentAge;
    let savings = form.currentSavings;
    for (let i = 0; i < years; i++) {
      savings += form.annualSavings;
      savings += (savings * form.annualReturnRate) / 100;
    }

    setEstimatedSavings(savings.toFixed(2));
  };

  return (
    <div className="apple-style-container">
      <form onSubmit={calculateSavings} className="retirement-form form-group">
        <h1>Retirement Savings Calculator</h1>
        <div>
          <label>Current Age:</label>
          <input
            type="number"
            name="currentAge"
            value={form.currentAge}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Retirement Age:</label>
          <input
            type="number"
            name="retirementAge"
            value={form.retirementAge}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Current Savings ($):</label>
          <input
            type="number"
            name="currentSavings"
            value={form.currentSavings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Annual Savings ($):</label>
          <input
            type="number"
            name="annualSavings"
            value={form.annualSavings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Annual Return Rate (%):</label>
          <input
            type="number"
            name="annualReturnRate"
            value={form.annualReturnRate}
            onChange={handleChange}
          />
        </div>
        <button className="calculate-btn" type="submit">
          Calculate
        </button>
      </form>
      <table className="retirement-results">
        <tbody>
          <tr>
            <td>Estimated Savings at Retirement:</td>
            <td>${estimatedSavings}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RetirementCalculator;
