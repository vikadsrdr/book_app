import React, {useState} from 'react';
import Book from './Book';
import './BookList.css';
import { useGlobalContext } from '../../providers/AppContext';
import cover_not_found from '../../images/cover_not_found.jpg'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


// РАЗОБРАТЬСЯ СО СПИННЕРОМ

const BookList = () => {

    const { books } = useGlobalContext();

    const [open, setOpen] = useState(false);
    // const handleClose = () => {
    //   setOpen(false);
    // };
    // const handleOpen = () => {
    //   setOpen(true);
    // };

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
                        description={book.description}
                        isbn={book.isbn ? book.isbn[0] : 'unknown'}

                        cover={
                            book.isbn
                                ? 'http://covers.openlibrary.org/b/isbn/' +
                                book.isbn[0] +
                                '-M.jpg'
                                : cover_not_found
                        }
                    />
                )) }
                <>
                 {/* <Button >Show backdrop</Button> */}


                {/* /////////MATERIAL UI //////// */}
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    </>
                
            </div>
            {/* // </main> */}
        </>
    );
};

export default BookList;