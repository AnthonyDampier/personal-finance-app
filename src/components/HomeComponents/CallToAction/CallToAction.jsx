import React from 'react';
import './CallToAction.css'; // Make sure to create a corresponding CSS file for styling

const CallToAction = () => {
    return (
        <div className="cta-container">
            <h2>Discover Your Economic Health</h2>
            <p>Use our easy tools to improve your financial literacy today.</p>
            <button className="cta-button" onClick={() => window.location.href='/MortgageCalcs'}>Start Now</button>
        </div>
    );
};

export default CallToAction;
