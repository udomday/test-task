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

export const createBook = createAsyncThunk(
  "createBook",
  async ({ title, pagecount, price, release }) => {
    const { data } = await axios.post(`http://localhost:5050/api/books/`, {
      title,
      pagecount,
      price,
      release,
    });

    return data;
  }
);

export const updateBook = createAsyncThunk(
  "updateBook",
  async ({ id, title, pagecount, price, release }) => {
    const { data } = await axios.put(`http://localhost:5050/api/books/${id}`, {
      title,
      pagecount,
      price,
      release,
    });

    return data;
  }
);

export const deleteBook = createAsyncThunk("deleteBooks", async (bookId) => {
  const { data } = await axios.delete(
    `http://localhost:5050/api/books/${bookId}`
  );

  return data;
});

const initialState = {
  books: [],
  statusBook: "LOADING",
};

export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetchBooks
    builder.addCase(fetchBooks.pending, (state) => {
      state.statusBook = "LOADING";
      state.books = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.statusBook = "SUCCESS";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.statusBook = "ERROR";
      state.books = [];
    });
  },
});

export default BookSlice.reducer;
