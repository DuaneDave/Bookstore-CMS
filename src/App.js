import { Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/header/Header';
import BookList from './components/books/BookList';
import Form from './components/form/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
