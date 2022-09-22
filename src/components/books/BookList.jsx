import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './BookList.module.css';
import Book from './Book';
import Form from '../form/Form';
import { getBooks } from '../../redux/books/book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [books, dispatch]);

  return (
    <main className={styles.container}>
      {books.map((book) => (
        <Book
          key={book.item_id}
          index={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </main>
  );
}

export default BookList;
