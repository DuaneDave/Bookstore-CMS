import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/book';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: Math.floor(Math.random() * 100),
        title,
        author,
        category: 'Action',
      }),
    );

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
