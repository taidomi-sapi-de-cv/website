import {combineReducers} from '@reduxjs/toolkit';
const testReducer = () => {
  return [{title: 'this is a test'}];
};

const selectReducer = (s: any = null, action: any) => {
  if (action.type === 'TEST') {
    return action.payload;
  }
  return s;
};

export default combineReducers({
  testReducer: testReducer,
  selectReducer: selectReducer,
});
