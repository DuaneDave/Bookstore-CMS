import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { removeBook } from '../../redux/books/book';
import styles from './Book.module.css';

function Book({ title, author, index }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(index));
  };

  return (
    <div className={styles.book}>
      <div className={styles.details}>
        <p>Action</p>
        <h3>{title}</h3>
        <h5>{author}</h5>
        <div className={styles.actions}>
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>

      <div className={styles.progress}>
        <h2>80%</h2>
        <span>Completed</span>
      </div>

      <div className={styles.info}>
        <p>CURRENT CHAPTER</p>
        <h2>Chapter 17</h2>
        <span className={styles.btn}>
          <Button
            type="button"
            title="REMOVE BOOK"
            onAction={removeBookHandler}
            classes={styles.remove}
          />
        </span>
      </div>
    </div>
  );
}

export default Book;
