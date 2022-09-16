import { Fragment } from 'react';

import Header from './components/header/Header';
import BookList from './components/books/BookList';
import Form from './components/form/Form';

function App() {
  return (
    <>
      <Header />
      <BookList />
      <Form />
    </>
  );
}

export default App;
