import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="apple-footer">
            <p>© {year} Anthony Dampier</p>
        </footer>
    )
};

export default Footer;