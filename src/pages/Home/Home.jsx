import React from 'react';
import './Home.css';
import Navbar from '../../components/Header/Navbar';
import Book from '../../components/Booklist/Book';
import BookList from '../../components/Booklist/BookList';

const Home = () => {
    return (
        <>
            <Navbar />
            <BookList />
        </>
    );
};

export default Home;