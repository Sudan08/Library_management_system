import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../interface/index';

const initalState: IBook = {
  id: null,
  title: null,
  genre: null,
  author: null,
  //   src: null,
  //   description: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState: initalState,
  reducers: {
    addBook: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.genre = action.payload.genre;
      state.author = action.payload.author;
      //       state.src = action.payload.src;
      //       state.description = action.payload.description;
    },
    removeBook: (state) => {
      state.id = null;
      state.title = null;
      state.genre = null;
      state.author = null;
      //       state.src = null;
      //       state.description = null;
    },
    updateBook: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.genre = action.payload.genre;
      state.author = action.payload.author;
      //       state.src = action.payload.src;
      //       state.description = action.payload.description;
    },
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
