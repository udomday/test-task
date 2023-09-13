import { configureStore } from "@reduxjs/toolkit";
import ConstsReducer from "./slices/ConstsSlice/slice";
import BookReducer from "./slices/BookSlice/slice";
import ReviewsReducer from "./slices/ReviewsSlice/sllice";

export const store = configureStore({
  reducer: {
    consts: ConstsReducer,
    books: BookReducer,
    reviews: ReviewsReducer,
  },
});
