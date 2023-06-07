import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../actions/counterSlice';

export function Counter() {
  const count = useSelector(
    (state: any) => (state && state.counter && state.counter.value) || 0,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
