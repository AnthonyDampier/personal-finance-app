import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DraggableBox from './components/DevHelperComponents/DraggableBox';
import NavBar from './components/NavBar/NavBar';
import HomeCalculations from './Pages/HomeCalculations/HomeCalculations';
import VehicleCalculations from './Pages/VehicleCalculations/VehicleCalculations';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  const userInfo = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: "123 Main St",
    city: "New York",
    country: "USA"
  };
  const userFinancialInfo = {
    income: 50000,
    expenses: 30000,
    savings: 20000
  };
  
  const userMortgageInfo = {
    mortgageAmount: 200000,
    interestRate: 3.5,
    loanTerm: 30,
    downPayment: 50000
  };

  const userVehicleInfo = {
    vehicleCost: 35000,
    downPayment: 10000,
    interestRate: 5,
    loanTerm: 5
  };

  return (
    <Router>
      <div className="App">
        {/* <DraggableBox userInfo={userInfo} userFinancialInfo={userFinancialInfo} userMortgageInfo={userMortgageInfo} userVehicleInfo={userVehicleInfo}/> */}
        <NavBar />
        <body>
          <Routes>
            {/* Home */}
            <Route path="/" exact element={<Home />}>
            </Route>
            {/* Home calcs */}
            <Route path="/MortgageCalcs"
            element={
              <HomeCalculations 
                userInfo={userInfo}
                userFinancialInfo={userFinancialInfo}
                userMortgageInfo={userMortgageInfo}
              />
            }>
            </Route>
            {/* Vehicle Calcs */}
            <Route path="/VehicleCalcs"
            element={
              <VehicleCalculations 
                userInfo={userInfo}
                userFinancialInfo={userFinancialInfo}
                userMortgageInfo={userMortgageInfo}
                userVehicleInfo={userVehicleInfo}
              />
            }>
            </Route>

            {/* Define more routes as needed */}
          </Routes>
        </body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
