import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          index={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
