import { createSlice, payloadAction } from '@reduxjs/toolkit';
import { IBookState, IBook } from '../interface/index';

const initalState: IBookState = {
  allBooks: [],
};

const userBookSlice = createSlice({
  name: 'userbooks',
  initialState: { ...initalState },
  reducers: {
    addBook: (state: IBookState, action: payloadAction<IBook[]>) => {
      state.allBooks = action.payload;
    },
  },
});

export const { addBook } = userBookSlice.actions;

export default userBookSlice.reducer;
