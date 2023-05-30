import React from 'react';
import { API_URL_AUTHOR } from '../../API';
import axios from 'axios';
import { useGlobalContext } from '../../providers/AppContext';
import SearchIcon from '@mui/icons-material/Search';
import './Authors.css';
import Navbar from '../../components/Header/Navbar';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';
import cover_not_found from '../../images/cover_not_found.jpg'



const Authors = () => {

    const { author, setAuthor, searchAuthor, setSearchAuthor } = useGlobalContext();
    const navigate = useNavigate();


    const authorSearch = async () => {
        try {
            const response = await axios.get(
                `${API_URL_AUTHOR}${searchAuthor}`);
            const { docs } = response.data;
            setAuthor(docs);

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchAuthor(e.target.value);
    };

    return (
        <>
            <Navbar />

            <div className='author-wrapper'>

                <button
                    style={{ color: 'var(--color-accent)' }}
                    onClick={() => navigate('/')}>
                    <KeyboardBackspaceOutlinedIcon />
                </button >

                <div className='author-container'>
                    <input
                        className='author-search-input'
                        placeholder='Find your author...'
                        type="search"
                        value={searchAuthor}
                        onChange={handleChange} />
                    <button
                        onClick={authorSearch}>
                        <SearchIcon style={{
                            fontSize: 38,
                            color: 'white',
                            margin: ' 12px 6px',
                            cursor: 'pointer',
                        }} />
                    </button>
                </div>
            </div>


            {author.slice(0, 1).map((auth) => (
                <div className='author-item'
                    onClick={(e) => e.stopPropagation()}>

                    <div className="author__info">
                        <p className="author-name">
                            Name: {auth.author_name}</p>
                        <p className="author-first-published">
                            First publish year: {auth.first_publish_year}</p>
                    </div>

                    <div className="author__image">
                        <img
                        style={{marginTop:'25px'}}
                            src={auth.author_key

                                ? 'http://covers.openlibrary.org/a/olid/' +
                                auth.author_key
                                +
                                '-M.jpg' : cover_not_found}

                            alt="no image available"
                            className="author-img"
                        />
                    </div>

                </div>



            ))}
        </>
    );
};

export default Authors;