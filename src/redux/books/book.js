const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Book title',
    Author: 'Author',
  },
  {
    id: 2,
    title: 'Book title',
    author: 'Author',
  },
  {
    id: 3,
    title: 'Book',
    author: 'David',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = (payload) => ({ type: ADD_BOOK, payload });

const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

export default booksReducer;
export { addBook, removeBook };
