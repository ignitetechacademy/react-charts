// src/NavBar.js
import React from 'react';
import '../styles/nav-bar.css';

const NavBar = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={require('../images/dayim.png')} alt="Dayim Equipment Logo" className="logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="usage">Equipment Usage</a>
                    </li>
                    <li className="nav-item">
                        <a href="utilization">Utilization Details</a>
                    </li>
                 </ul>
            </nav>
        </header>
    );
};

export default NavBar;
