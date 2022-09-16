import { Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/header/Header';
import BookList from './components/books/BookList';
import Category from './components/books/Category';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
