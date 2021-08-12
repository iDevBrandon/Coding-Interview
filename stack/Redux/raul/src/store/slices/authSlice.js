import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  loading: false,
  error: null,
  user: {},
};

// createAsyncThunk create 3 different actions such as pending, success and failure
export const fetchRandomUser = createAsyncThunk(
  "auth/fetchRandomUser",
  async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      throw Error(error);
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchRandomUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRandomUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [fetchRandomUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
