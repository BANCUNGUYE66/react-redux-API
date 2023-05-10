import { configureStore } from '@reduxjs/toolkit';
import { reducer as usersReducer } from './users/usersSlice';

const rootReducer = {
  users: usersReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;