import React from 'react';
import './Home.css';
import Navbar from '../../components/Header/Navbar';
import BookList from '../../components/Booklist/BookList';
import HeaderSearch from '../../components/Header/HeaderSearch';

const Home = () => {
    return (
        <>
            <HeaderSearch />
            <Navbar />
            <BookList />
        </>
    );
};

export default Home;