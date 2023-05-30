import React from 'react';
import { useState } from 'react';
import BookItem from './BookItem';

const Book = ({
    title,
    author_name,
    first_publish_year,
    publisher,
    person,
    cover,
    first_sentence,
    ratings_average,
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
                        <h2 className="book__title-title">{title}</h2>
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
                        <h2 className="book__raiting-info">
                        Raiting: {ratings_average}
                        </h2>

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