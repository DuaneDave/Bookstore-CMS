import { useSelector } from 'react-redux';

import Book from './Book';
import Form from '../form/Form';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} index={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
