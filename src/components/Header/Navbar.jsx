import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    // const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className='navbar'>

            <ul className="navbar-links">
                <li className="navbar-link"
                    onClick={() => navigate('/')}
                >Home</li>
                <li className="navbar-link"
                    onClick={() => navigate('/authors')}
                >Authors</li>
                <li className="navbar-link">About Us</li>
                <li className="navbar-link"
                    onClick={() => navigate('/contactUs')}
                > Contact</li>
                <li className="navbar-link"
                    onClick={() => navigate('/signIn')}>
                    Register
                </li>
            </ul>

        </nav >
    );
};

export default Navbar;