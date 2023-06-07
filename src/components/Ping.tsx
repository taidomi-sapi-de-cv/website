import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../actions/pingSlice';

export function Ping() {
  const count = useSelector((state: any) => state.ping.value || 0);
  const title = useSelector((state: any) => state.ping.title);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Start ping" onClick={() => dispatch(increment())}>
        Start
      </button>
      <span>
        Ping Count {count} | {title}
      </span>
      <button aria-label="Stop ping" onClick={() => dispatch(decrement())}>
        Stop
      </button>
    </div>
  );
}
