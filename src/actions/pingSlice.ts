// import IO from 'socket.io-client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type {RootState} from '../store';

// Define a type for the slice state
interface PingState {
  value: number;
  title: string;
}

// Define the initial state using that type
const initialState: PingState = {
  value: 0,
} as PingState;

export const pingSlice = createSlice({
  name: 'ping',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      // console.log('aca mero');
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setText,
} = pingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPing = (state: RootState) => state.ping.value;

export default pingSlice.reducer;
