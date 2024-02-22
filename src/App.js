import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// Pages
import HomeCalculations from './Pages/HomeCalculations/HomeCalculations';
import VehicleCalculations from './Pages/VehicleCalculations/VehicleCalculations';
import Home from './Pages/Home/Home';
import RetirementCalculations from './Pages/Retirement/Retirement';
//Components
import DraggableBox from './components/DevHelperComponents/DraggableBox';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';

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

  const blogPosts = [
    {
      title: "Understanding React's useState Hook",
      author: "Jane Doe",
      date: "July 1, 2024",
      summary: "A deep dive into how useState works and how to use it in your React applications.",
      url: "https://example.com/blog/useState-hook"
    },
    {
      title: "An Introduction to CSS Grid",
      author: "Jane Doe",
      date: "June 15, 2024",
      summary: "Learn how to use CSS Grid to create complex and responsive layouts.",
      url: "https://example.com/blog/css-grid"
    },  
    {
      title: "A Guide to the CSS calc() Function",
      author: "John Doe",
      date: "June 1, 2024",
      summary: "Discover how the CSS calc() function can make your styles more dynamic and flexible.",
      url: "https://example.com/blog/css-calc-function"
    }
    // Add more blog post objects here
  ];

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
          <Routes>
            {/* Home */}
            <Route path="/" exact 
              element={
                <Home blogPosts={blogPosts}/>
              }>
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
            <Route path="/Contact" 
              element={
                <ContactForm />
              }>
            </Route>
            <Route path="/Retirement"
              element={
                <RetirementCalculations/>
              }>
            </Route>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
