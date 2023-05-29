import React, { useEffect, useState } from 'react';
import './Header.css';
import '../Layout/layout.css';
import useTheme from '../../hooks/useTheme';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';


const Header = () => {

    const { isDark, setIsDark } = useTheme();

    const [signIn, setSignIn] = useState(false);
    const handlerClickSignIn = () => setSignIn(!signIn);
    const navigate = useNavigate();


    return (
        <>
            <header className={isDark ? 'darkMode' : 'lightMode'}
                style={{
                    width: '100%',
                    position: 'relative'
                }}>

                <div className='header-top'>
                    <h1 style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}>
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

                        <div className='header-login'
                            onClick={handlerClickSignIn}>
                            <AccountCircleOutlinedIcon style={{
                                fontSize: 28,
                            }} />
                            <h2
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate('/signIn')}>Sign In</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* <HeaderSearch /> */}

            {/* <div className='header-middle'>
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
            </div> */}
        </>
    );
};

export default Header;

