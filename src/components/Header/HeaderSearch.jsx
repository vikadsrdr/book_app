import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';
import { useGlobalContext } from '../../providers/AppContext';
import logo from '../../images/logo.png';


const HeaderSearch = () => {
    const { setSearchTerm } = useGlobalContext();
    return (
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
    );
};

export default HeaderSearch;