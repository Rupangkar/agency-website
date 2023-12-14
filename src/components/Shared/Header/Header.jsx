import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <h2>.logo</h2>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;