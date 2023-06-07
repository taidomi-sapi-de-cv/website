import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './actions/counterSlice';
import pingReducer from './actions/pingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ping: pingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;