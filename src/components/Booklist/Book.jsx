import React from 'react';
import { useState } from 'react';
import BookItem from './BookItem';

const Book = ({
    title,
    author_name,
    first_publish_year,
    publisher,
    person,
    // isbn,
    cover,
    first_sentence,
    ratings_average,
    // description
}) => {

    const [active, setActive] = useState(false);

    return (
        <div className="book-container" >

            <div className='book-list__subcontainer'
                >
                <div
// onClick={(e) => e.stopPropagation()}
                    className="book__item"
                    onClick={() => setActive(true)}
                    >

                    <div className="book__title">
                        <p className="book__title-title">{title}</p>
                        <p className="book__title-author">{author_name}</p>
                    </div>
                    <div className="book__cover">
                        <img
                            src={cover}
                            alt="no cover available"
                            className="book-cover"
                        />
                    </div>
                    <div className="book__info">
                        <p className="book__published-info">
                            First Published: {first_publish_year}
                        </p>
                        {/* <p>{first_sentence}</p> */}
                        {/* <p className="book__publisher-info">Publisher: {publisher}</p> */}
                        {/* <p className="book__isbn-info">ISBN: {isbn}</p>
                    <p>{description}</p> */}
                    </div>
                </div>
            </div>

            < BookItem
                active={active}
                setActive={setActive}
                title={title}
                author_name={author_name}
                first_publish_year={first_publish_year}
                publisher={publisher}
                cover={cover}
                first_sentence={first_sentence}
                person={person}
                ratings_average={ratings_average}
            />
        </div>

    )
}

export default Book;