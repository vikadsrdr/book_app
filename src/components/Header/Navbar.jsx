import React, { useState } from 'react';
import './Header.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    // const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className='navbar'>
            
            <ul className="navbar-links">
                <li className="navbar-link">Home</li>
                <li className="navbar-link">Authors</li>
                <li className="navbar-link">About Us</li>
                <li className="navbar-link">Contact</li>
                <li className="navbar-link">Register</li>
            </ul>

        </nav>
    );
};

export default Navbar;