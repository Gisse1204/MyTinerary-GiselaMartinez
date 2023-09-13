import { createReducer } from "@reduxjs/toolkit";
import { login, signup, authenticate, signOut } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    firstname: "",
    lastname: "",
    photourl: "",
  },
  token: null,
  status: 'offline',
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      const { user, token, status } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      state.status = status;
    })
    .addCase(signup, (state, action) => {
      const { user, token, status } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      state.status = status;
    })
    .addCase(authenticate.fulfilled, (state, action) => {
      const { user, token, status } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      state.status = status;
    })
    .addCase(signOut, (state) => {
      state.isAuthenticated = false;
      state.user = {
        email: "",
        firstname: "",
        lastname: "",
        photourl: "",
      };
      state.token = null;
      state.status = 'offline';
    });
});

export default authReducer;
