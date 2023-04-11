import React from 'react';
import { useAppSelector } from '../store/store.ts';

const useFilteredBooks = () => {
  const getBooks = useAppSelector((state) => state.books.allBooks.books);
  const romance = getBooks?.filter((book) => book.genre === 'Romance');
  const fiction = getBooks?.filter((book) => book.genre === 'Fiction');
  const nonFiction = getBooks?.filter((book) => book.genre === 'Non-Fiction');
  const mystery = getBooks?.filter((book) => book.genre === 'Mystery');
  const horror = getBooks?.filter((book) => book.genre === 'Horror');
  const fantasy = getBooks?.filter((book) => book.genre === 'Fantasy');
  const scienceFiction = getBooks?.filter(
    (book) => book.genre === 'Science Fiction'
  );
  const thriller = getBooks?.filter((book) => book.genre === 'Thriller');
  return {
    romance,
    fiction,
    nonFiction,
    mystery,
    horror,
    fantasy,
    scienceFiction,
    thriller,
  };
};

export default useFilteredBooks;
