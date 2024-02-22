import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
    <header>
        <nav className="apple-nav">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/MortgageCalcs">Mortgage</Link></li>
                <li><Link to="/VehicleCalcs">Vehicle</Link></li>
                <li><Link to="/retirement">Retirement</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
};

export default NavBar;