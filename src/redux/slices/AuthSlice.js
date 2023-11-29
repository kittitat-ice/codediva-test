import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  didShowSplash: false,
  userPhoneNumber: '',
  pin: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    clearUserPhoneNumber: state => {
      state.userPhoneNumber = '';
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setPin: (state, action) => {
      state.pin = action.payload;
    },
    clearPin: state => {
      state.pin = '';
    },
  },
});

export const {
  setUserPhoneNumber,
  clearUserPhoneNumber,
  setIsLogin,
  setPin,
  clearPin,
} = AuthSlice.actions;
export const selectAuthReducer = state => state.auth;

export default AuthSlice.reducer;
