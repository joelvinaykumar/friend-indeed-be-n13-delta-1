import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// slices
import counterReducer from '../counter/counterSlice'
import homeReducer from '../pages/Home/Home.slice'
import profileReducer from '../pages/MyProfile/MyProfile.slice'
import authReducer from '../pages/Login/Login.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    profile: profileReducer,
    auth: authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
