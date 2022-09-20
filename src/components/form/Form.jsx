import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'bookstore/books/ADD_BOOK',
      payload: {
        id: books.length + 1,
        title,
        author,
      },
    });

    setTitle('');
    setAuthor('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <form onSubmit={addBookHandler}>
      <Input
        type="text"
        placeholder="Book title"
        onUpdate={titleChangeHandler}
        value={title}
      />
      <Input
        type="text"
        placeholder="Author"
        onUpdate={authorChangeHandler}
        value={author}
      />
      <Button type="submit" title="ADD BOOK" />
    </form>
  );
}

export default Form;
