import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface UserState {
  id: string | null;
  name: string | null;
}

// Define the initial state
const initialState: UserState = {
  id: null,
  name: null,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user data
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    // Action to clear the user data
    clearUser: (state) => {
      state.id = null;
      state.name = null;
    },
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
