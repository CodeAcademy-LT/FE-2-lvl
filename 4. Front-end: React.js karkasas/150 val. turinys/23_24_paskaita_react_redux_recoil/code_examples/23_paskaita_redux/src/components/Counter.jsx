import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../shared/redux/actions/counterActions';

const Counter = () => {
  // State
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <p>Count {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default Counter;
