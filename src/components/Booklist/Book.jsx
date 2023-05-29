import React from 'react';
// import { useState } from 'react';

const Book = ({
    title,
    author_name,
    first_publish_year,
    publisher,
    isbn,
    cover,
    // description
}) => {

    // const [active, setActive] = useState(false);

    return (
        // <div
        // className="book-item" onClick={() => setActive(true)}>

        <ul className='book-list__subcontainer'>
            <div
                className="book__item"
                onClick={(e) => e.stopPropagation()}>
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
                    <p className="book__publisher-info">Publisher: {publisher}</p>
                    {/* <p className="book__isbn-info">ISBN: {isbn}</p>
                    <p>{description}</p> */}
                </div>
            </div>
        </ul>
    )

    {/* <Modal
                active={active}
                setActive={setActive}
                title={title}
                author_name={author_name}
                first_publish_year={first_publish_year}
                publisher={publisher}
                isbn={isbn}
                cover={cover}
            /> */}
    // </div >

}

export default Book;