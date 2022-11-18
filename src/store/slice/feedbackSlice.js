import { createSlice } from "@reduxjs/toolkit";
import { PostFeedback } from "../../api/feedback";
const initialState = {
  feedback: {},
  isLoading: false,
  error: "",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    postFeedback(state) {
      state.isLoading = true;
    },

    successPostFeedback(state, action) {
      state.feedback = action.payload;
      state.isLoading = false;
    },
  },
});

export const PostFeedbackFunc = (name, phone, email, message) => {
  return async (dispatch) => {
    dispatch(feedbackSlice.actions.postFeedback());
    const response = await PostFeedback(name, phone, email, message);
    dispatch(feedbackSlice.actions.successPostFeedback(response));
  };
};

export default feedbackSlice.reducer;
