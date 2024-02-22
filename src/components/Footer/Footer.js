import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="apple-footer">
            <p>© {year} Anthony Dampier</p>
            <a href="https://github.com/anthonydampier" target="_blank" rel="noopener noreferrer">
                {/* Replace src with the path to your GitHub logo */}
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{width: '24px', height: '24px'}} />
            </a>
            <a href="https://linkedin.com/in/anthonydampier" target="_blank" rel="noopener noreferrer">
                {/* Replace src with the path to your LinkedIn logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" style={{width: '24px', height: '24px'}} />
            </a>
        </footer>
    )
};

export default Footer;