import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppDetails = createAsyncThunk(
  "app/getAppDetails",
  async (appId) => {
    try {
      const response = await axios.get(`/api/app_by_name_id?appId=${appId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const initialState = {
  loading: false,
  appDetail: [],
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAppDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.appDetail = action.payload;
        state.error = null;
      })
      .addCase(getAppDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appSlice.reducer;
