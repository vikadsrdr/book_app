import React from 'react';
import '../Header/Header.css';
import './SearchForm.css';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { API_URL } from '../../API';
import { useGlobalContext } from '../../providers/AppContext';


const SearchForm = () => {

    const { setBooks, searchTerm, setSearchTerm } = useGlobalContext();
  

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `${API_URL}${searchTerm}`);
            const { docs } = response.data;
            setBooks(docs);

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <div className='header-middle'>

            <input
                className='header-middle-search-input'
                type='search'
                placeholder='Find your book...'
                value={searchTerm}
                onChange={handleChange}
            />

            <button type="submit"
                onClick={handleSearch}>
                <SearchIcon style={{
                    fontSize: 38,
                    color: 'white',
                    margin: ' 12px 6px',
                    cursor: 'pointer',
                }} />
            </button>

        </div>

    );
};

export default SearchForm;