import {configureStore, combineReducers} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AuthSlice from './slices/AuthSlice';

const combinedReducer = combineReducers({
  auth: AuthSlice,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
