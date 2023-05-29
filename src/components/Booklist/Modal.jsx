// import React from 'react';
// import './BookList.css';

// const Modal = ({
//     active,
//     setActive,
//     title,
//     author_name,
//     first_publish_year,
//     publisher,
//     isbn,
//     cover,
// }) => {
//     return (
//         <div
//             className={active ? 'modal active' : 'modal'}
//             onClick={() => setActive(false)}
//         >
//             <div
//                 className="modal__content"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div className="modal__title">
//                     <p className="modal__book-title">{title}</p>
//                     <p className="modal__book-info">{author_name}</p>
//                 </div>
//                 <div className="modal__cover">
//                     <img
//                         src={cover}
//                         alt="no cover available"
//                         className="modal__image"
//                     />
//                 </div>
//                 <div className="modal__info">
//                     <p className="modal__book-info">
//                         First Published: {first_publish_year}
//                     </p>
//                     <p className="modal__book-info">Publisher: {publisher}</p>
//                     <p className="modal__book-info">ISBN: {isbn}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal