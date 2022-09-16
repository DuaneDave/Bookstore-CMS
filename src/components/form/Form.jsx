import Input from '../../UI/Input';
import Button from '../../UI/Button';

function Form() {
  return (
    <form>
      <Input
        type="text"
        placeholder="Book title"
      />
      <Input type="text" placeholder="Author" />
      <Button type="button" title="ADD BOOK" />
    </form>
  );
}

export default Form;