import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <main class="main-content">
                <section class="hero-section">
                    <h1>Welcome to your Personal Finance Application</h1>
                    <p>Discover our news and financial calculator that fit your needs</p>
                    {/* <button class="explore-button">Explore Now</button> */}
                </section>

                <section class="features-section">
                    <h2>Our Features</h2>
                    <div class="features-grid">
                        <Link to="/MortgageCalcs">
                            <div class="feature-item">
                                <h3>Mortgage Calculators</h3>
                                <p>Calculate the health of your mortgage and find information to help you understand your mortgage, the mortgage market, and discover opportunities to save!</p>
                            </div>
                        </Link>
                        <Link to="/VehicleCalcs">
                            <div class="feature-item">
                                <h3>Vehicle Calculators</h3>
                                <p>Description of Feature 2.</p>
                            </div>
                        </Link>
                        <div class="feature-item">
                            <h3>Feature 3</h3>
                            <p>Description of Feature 3.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;