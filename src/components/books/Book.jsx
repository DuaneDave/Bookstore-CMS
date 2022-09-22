import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { removeBook } from '../../redux/books/book';

function Book({ title, author, index }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(index));
  };

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>

      <div>
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <Button
          type="button"
          title="Remove Book"
          onAction={removeBookHandler}
        />
      </div>
    </div>
  );
}

export default Book;
