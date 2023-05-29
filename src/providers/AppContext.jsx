import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../API';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    // ?????????
    
    useEffect(() => {
        const bookSearch = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}${searchTerm}`);
                const { docs } = response.data;
                setBooks(docs);

            } catch (err) {
                console.log(err);
            }
        };
    },[searchTerm]);


    return (
        <AppContext.Provider value={{ books, setBooks, setSearchTerm, searchTerm }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

