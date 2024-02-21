import logo from './logo.svg';
import './App.css';
import DraggableBox from './components/DevHelperComponents/DraggableBox';
import HomeCalculations from './components/HomeCalculations/HomeCalculations';

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

  return (
    <div className="App">
      <DraggableBox 
        // Style attributes
        boxWidth={300} boxHeight={300} initialX={0} initialY={0} 
        // user information
        userInfo={userInfo}
        userFinancialInfo={userFinancialInfo}
        userMortgageInfo={userMortgageInfo}
      />
      <header className="App-header">
        Hello World
      </header>
      <div>
      <h1>Home Calculations</h1>
      </div>
      <div>
        Component 1: Home Calculator
        <HomeCalculations 
          userInfo={userInfo}
          userFinancialInfo={userFinancialInfo}
          userMortgageInfo={userMortgageInfo}/>
      </div>
    </div>
  );
}

export default App;
