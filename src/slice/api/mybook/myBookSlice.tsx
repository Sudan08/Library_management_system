import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookState, IBook } from '../../../interface/index';

const initalState: IBookState = {
  allBooks: [],
};

const bookSlice = createSlice({
  name: 'mybooks',
  initialState: { ...initalState },
  reducers: {
    addBook: (state: IBookState, action: PayloadAction<IBook[]>) => {
      state.allBooks = action.payload;
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
