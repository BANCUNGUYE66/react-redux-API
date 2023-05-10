import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/dist/rtk.esm.min.js';
import { rejectWithValue } from '@reduxjs/toolkit/dist/rtk.esm.min.js';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: undefined },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export { fetchUsers };
export const { reducer } = usersSlice;