import React from 'react';
import Book from './Book';
import './BookList.css';
import { useGlobalContext } from '../../providers/AppContext';
import cover_not_found from '../../images/cover_not_found.jpg'


const BookList = () => {
    const { books } = useGlobalContext();

    return (
        // <main>
        <>
            {/* потом заменить слайс на пагинацию */}
            <div className='book-list__container'>
                {books.slice(0, 20).map((book) => (
                    <Book
                        key={book.key}
                        title={book.title ? book.title : 'unknown'}
                        author_name={book.author_name ? book.author_name[0] : 'unknown'}
                        first_publish_year={book.first_publish_year ? book.first_publish_year : 'unknown'}
                        publisher={
                            book.publisher ? book.publisher[0] : 'unknown'
                        }
                        isbn={book.isbn ? book.isbn[0] : 'unknown'}
                        cover={
                            book.isbn
                                ? 'http://covers.openlibrary.org/b/isbn/' +
                                book.isbn[0] +
                                '-M.jpg'
                                : cover_not_found
                        }
                    />
                ))}
            </div>
        {/* // </main> */}
        </>
    );
};

export default BookList;