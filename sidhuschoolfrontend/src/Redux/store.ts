import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers'

// Configure the Redux store
const store = configureStore({
  reducer: RootReducer, // Combine all your reducers here
  devTools: process.env.NODE_ENV !== 'production', // Enable dev tools in non-production builds
});

export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type RootState = ReturnType<typeof store.getState>; // Type for state

export default store;
