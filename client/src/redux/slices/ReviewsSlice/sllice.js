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
  statusReviews: "LOADING",
};

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetchReviews
    builder.addCase(fetchReviews.pending, (state) => {
      state.statusReviews = "LOADING";
      state.reviews = [];
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.statusReviews = "SUCCESS";
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.statusReviews = "ERROR";
      state.reviews = [];
    });
  },
});

export default ReviewsSlice.reducer;
