import React from 'react';
import useTheme from '../../hooks/useTheme';
import styles from './layout.css';
import './layout.css';

const Layout = ({ children }) => {

    const { isDark } = useTheme();


    //мб это всё вообще не надо, РАЗОБРАТЬСЯ1

    return (
        <div className={isDark ? 'darkMode' : 'lightMode'}>
            {children}
        </div>
    );
};

export default Layout;