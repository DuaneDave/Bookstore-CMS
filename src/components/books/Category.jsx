import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';

function Category() {
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch({
      type: 'bookstore/categories/CHECK_STATUS',
    });
  };

  return (
    <Button type="button" title="CHECK STATUS" onAction={checkStatusHandler} />
  );
}

export default Category;
