import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import user slice

const rootReducer = combineReducers({
  user: userReducer, // Add slices here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
