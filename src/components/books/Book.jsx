import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';

function Book({ title, author, index }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch({
      type: 'bookstore/books/REMOVE_BOOK',
      payload: index,
    });
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
