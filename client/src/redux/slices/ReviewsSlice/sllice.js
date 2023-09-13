import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk(
  "fetchReviews",
  async ({ startRow, endRow }) => {
    const { data } = await axios.get(
      `http://localhost:5050/api/reviews?offset=${startRow}&limit=${endRow}`
    );

    return data;
  }
);

const initialState = {
  reviews: {},
  status: "LOADING",
};

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default ReviewsSlice.reducer;
