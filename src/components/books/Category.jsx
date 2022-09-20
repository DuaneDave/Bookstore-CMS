import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';

function Category() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch({
      type: 'bookstore/categories/CHECK_STATUS',
    });
  };

  return (
    <div>
      <p>{category}</p>
      <Button
        type="button"
        title="CHECK STATUS"
        onAction={checkStatusHandler}
      />
    </div>
  );
}

export default Category;
