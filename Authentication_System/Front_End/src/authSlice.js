import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

name: "auth",

initialState:{
  
  isLoading: false,
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
  success: null
},

reducers:{

// Registeration
register:(state,action)=>{
  state.isLoading = true;
  state.error = null;
},
registerSuccess:(state,action)=>{
  state.isLoading = false;
  state.error = null;
  state.success = action.payload;
},
registerFailed:(state,action)=>{
  state.isLoading = false;
  state.error = action.payload;
  state.success = null;
},

// Login
login:(state,action)=>{
  state.isLoading = true;
  state.error = null;
},
loginSuccess:(state,action)=>{
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isAuthenticated = true;
  state.error = null;
  state.success = action.payload;
},
loginFailed:(state,action)=>{
    state.isLoading = false;
    state.error = action.payload;
  state.success = null;
},

// Logout
logout:(state,action)=>{
  state.isLoading = false;
  state.user = null;
  state.token = null;
  state.isAuthenticated = false;
  state.error = null;
  state.success = action.payload;
},
}})


export const
{

  register,registerSuccess,registerFailed,
  login,loginSuccess,loginFailed,
  logout

} = authSlice.actions;

export const authReducer = authSlice.reducer;