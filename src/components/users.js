import React from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';
import { rejectWithValue } from '@reduxjs/toolkit/dist/rtk.esm.min.js';

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default Users;