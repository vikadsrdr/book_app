import React from 'react';
import './Header.css';
import '../Layout/layout.css';
import logo from '../../images/logo.png';
import useTheme from '../../hooks/useTheme';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// import { BookmarkBorderOutlinedIcon, AccountCircleOutlinedIcon, SearchIcon } from '@mui/icons-material';


const Header = () => {

    const { isDark, setIsDark } = useTheme();

    return (
        <header className={isDark ? 'darkMode' : 'lightMode'}
            style={{
                width: '100%',
                // height: '250px',
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
                        cursor: 'pointer'
                    }} />

                    <div className='header-login'>
                        <AccountCircleOutlinedIcon style={{
                            fontSize: 28,
                            cursor: 'pointer'
                        }} />
                        Login
                    </div>
                </div>
            </div>

            <div className='header-middle'>
                <div className='header-logo'>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            height: '120px',
                            marginTop: '60px ',
                            marginLeft: '50px',
                        }} />
                </div>
                <div className='header-middle-search-bar'>
                    <input
                        className='header-middle-search-input'
                        type='search'
                        placeholder='Find your book...' />

                    <SearchIcon style={{
                        fontSize: 38,
                        color: 'white',
                        margin: ' 12px 6px',
                        cursor: 'pointer'
                    }} />
                </div>
                <ShoppingCartOutlinedIcon style={{
                    fontSize: 35,
                    color: 'white',
                    cursor: 'pointer'
                }} />
            </div>

        </header>
    );
};

export default Header;







