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
}) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}>

                <div className="modal__title">
                    <p className="modal__book-title">{title}</p>
                    <p className="modal__book-author"> Auther: <span>{author_name}</span></p>
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
                        <p className="modal__book-first-publish">
                           <span>First Published:</span> {first_publish_year}</p>
                        <p className="modal__book-publisher"><span>Publisher:</span>  {publisher}</p>
                        <p className="modal__book-persons"><span>Famous persons:</span>  {person}</p>
                        <p className="modal__book-frst-sentence"><span>First sentence:</span>  {first_sentence}</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookItem;

