import React, { useEffect, useState } from 'react';
import './Header.css';
import '../Layout/layout.css';
import logo from '../../images/logo.png';
import useTheme from '../../hooks/useTheme';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchForm from '../SearchForm/SearchForm';
import { useGlobalContext } from '../../providers/AppContext';


const Header = () => {

    const { isDark, setIsDark } = useTheme();

    const { books, searchTerm, setSearchTerm } = useGlobalContext();

    return (
        <header className={isDark ? 'darkMode' : 'lightMode'}
            style={{
                width: '100%',
                position: 'relative'
            }}>

            <div className='header-top'>
                <h1>
                    React Book Application
                </h1>

                <button onClick={() => setIsDark(!isDark)}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </button>

                <div className='header-icons'>
                    <BookmarkBorderOutlinedIcon style={{
                        fontSize: 28,
                        cursor: 'pointer',
                    }} />

                    <div className='header-login'>
                        <AccountCircleOutlinedIcon style={{
                            fontSize: 28,
                            cursor: 'pointer'
                        }} />
                        Sign In
                    </div>
                </div>
            </div>

            <div className='header-middle'>
                <div className='header-logo'>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '50%',
                        }} />
                </div>

                <SearchForm
                    onChange={(inputValue) => {
                        setSearchTerm(inputValue)
                    }} />
            </div>
        </header>
    );
};

export default Header;

