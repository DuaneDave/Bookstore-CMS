/* eslint-disable react/prop-types */
import Button from '../../UI/Button';

function Book({ title, author }) {
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
        <Button type="button" title="CHECK STATUS" />
      </div>
    </div>
  );
}

export default Book;
