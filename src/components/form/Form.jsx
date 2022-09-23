import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/book';

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import styles from './Form.module.css';

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
    <form onSubmit={addBookHandler} className={styles.container}>
      <h2 className={styles.title}>Add New Book</h2>
      <div className={styles.entries}>
        <Input
          type="text"
          placeholder="Book title"
          onUpdate={titleChangeHandler}
          value={title}
          classes={styles.title}
        />
        <Input
          type="text"
          placeholder="Author"
          onUpdate={authorChangeHandler}
          value={author}
          classes={styles.author}
        />
        <Button type="submit" title="ADD BOOK" classes={styles.addEntry} />
      </div>
    </form>
  );
}

export default Form;
