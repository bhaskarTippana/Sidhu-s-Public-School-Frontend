import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state interface
interface UserState {
  password: string | null;
  name: string | null;
  role: string | null;
}

// Define the initial state
const initialState: UserState = {
  password: null,
  name: null,
  role: null
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user data
    setUser: (state, action: PayloadAction<UserState>) => {
      state.password = action.payload.password;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    // Action to clear the user data
    clearUser: (state) => {
      state.password = null;
      state.name = null;
      state.role = null;
    },
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
