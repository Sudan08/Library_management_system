import { createSlice, payloadAction } from '@reduxjs/toolkit';
import { IBookState, IBook } from '../interface/index';

const initalState: IBookState = {
  allBooks: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState: { ...initalState },
  reducers: {
    addBook: (state: IBookState, action: payloadAction<IBook[]>) => {
      state.allBooks = action.payload;
    },
  },
});

export const { addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
