import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/book';
import categoriesReducer from './categories/categories';
const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});

export default store;
