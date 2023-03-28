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
      //       state.src = action.payload.src;
      //       state.description = action.payload.description;
    },
    updateBook(state, action) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.genre = action.payload.genre;
      state.author = action.payload.author;
      //       state.src = action.payload.src;
      //       state.description = action.payload.description;
    },
  },
});

export const { addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
