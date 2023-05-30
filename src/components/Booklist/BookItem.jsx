import React from 'react';
import './BookList.css';

const BookItem = ({
    active,
    setActive,
    title,
    author_name,
    first_publish_year,
    publisher,
    person,
    cover,
    first_sentence,
    ratings_average,
}) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}>

                <div className="modal__title">
                    <p className="modal__book-title">{title}</p>
                    <p className="modal__book-info">{author_name}</p>
                </div>
                <div className='modal_info-container'>
                    <div className="modal__cover">
                        <img
                            src={cover}
                            alt="no cover available"
                            className="modal__image"
                        />
                    </div>
                    <div className="modal__info">
                        <p className="modal__book-info">
                            First Published: {first_publish_year}</p>
                        <p className="modal__book-info">Publisher: {publisher}</p>
                        <p className="modal__book-info">Famous persons: {person}</p>
                        <p className="modal__book-info">Raiting: {ratings_average}</p>
                        <p className="modal__book-info">Rirst sentence:{first_sentence}</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookItem;


// person
// first_sentence

// ratings_average
// :
// 4.3444443
// ratings_count
// :
// 270
// ratings_count_1
// :
// 4
// ratings_count_2
// :
// 6
// ratings_count_3
// :
// 39
// ratings_count_4
// :
// 65
// ratings_count_5
// :
// 156
// ratings_sortable
// :
// 4.226862