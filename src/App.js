import { Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/header/Header';
import BookList from './components/redux/books/BookList';
import Category from './components/redux/categories/Category';

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
