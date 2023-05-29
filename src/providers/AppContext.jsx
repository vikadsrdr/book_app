import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [author, setAuthor] = useState([]);
    const [searchAuthor, setSearchAuthor] = useState('');


   const value = {
        books, loading, setBooks, setSearchTerm, searchTerm, author, setAuthor, searchAuthor, setSearchAuthor
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

