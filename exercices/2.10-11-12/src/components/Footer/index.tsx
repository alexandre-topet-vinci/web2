import React from 'react';
import './Footer.css';

interface FooterProps {
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </footer>
    );
};

export default Footer;