import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async ({ startRow, endRow }) => {
    const { data } = await axios.get(
      `http://localhost:5050/api/books?offset=${startRow}&limit=${endRow}`
    );

    return data;
  }
);

const initialState = {
  books: [],
  status: "LOADING",
};

export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetchBooks
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "LOADING";
      state.books = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.status = "SUCCESS";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = "ERROR";
      state.books = [];
    });
  },
});

export default BookSlice.reducer;
