import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './store/users/usersSlice';

const rootReducer = {
    users: usersSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;


