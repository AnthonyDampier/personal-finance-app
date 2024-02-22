import React from 'react';
import { Link } from 'react-router-dom';

import './FeaturedContent.css';

const FeaturedContent = () => {
    return (
        <section className="features-section">
            <h2>Our Features</h2>
            <div className="features-grid">
                <Link to="/MortgageCalcs">
                    <div className="feature-item">
                        <h3>Mortgage Calculators</h3>
                        <p>Calculate the health of your mortgage and find information to help you understand your mortgage, the mortgage market, and discover opportunities to save!</p>
                    </div>
                </Link>
                <Link to="/VehicleCalcs">
                    <div className="feature-item">
                        <h3>Vehicle Calculators</h3>
                        <p>Calculate the health of your vehicle loan and find information to help you understand your vehicle loan, the vehicle loan market, and discover opportunities to save!</p>
                    </div>
                </Link>
                <Link to="/Retirement">
                    <div className="feature-item">
                        <h3>Retirement Calc</h3>
                        <p>Calculate the health of your retirement savings and find information to help you understand your retirement savings, the retirement savings market, and discover opportunities to save!</p>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default FeaturedContent;