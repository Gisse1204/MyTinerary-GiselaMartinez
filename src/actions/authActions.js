import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LS } from './../LS';
import { toast } from 'react-toastify';

const login = createAction('login', (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    status: "online"
  };

  LS.set('token', credentials.token)

  return {
    payload: reducerData
  };
});

const signup = createAction('signup', (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    status: "online"
  };  
 
  return {
    payload: reducerData
  };
});

const authenticate = createAsyncThunk('authenticate', async () => {
  try {
    const token = LS.getText('token');
    const {data} = await axios.get('http://localhost:1212/api/auth/token', {
      headers: {
        Authorization: "Bearer " + token
      }
    });

  const reducerData = {
    user: data.userData,
    status: "online"
  }
  
  //console.log (data);
  //console.log (reducerData);

  toast.success('Welcome again ' + data.userData.firstname, {
    autoClose: 4000,
    });

  return reducerData

  } catch(error){
    console.log (error);
}
})

const signOut = createAction('signOut', () => {
  LS.rm('token')
  
  return {
    payload: null}
})

export { login, signup, authenticate, signOut };