import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './index';

export interface GlobalState {
  userStatus: 'online' | 'offline';
}

const initialState: GlobalState = {
  userStatus: 'offline',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const selectUserStatus = (state: RootState) => state.global.userStatus;

export default globalSlice.reducer;
