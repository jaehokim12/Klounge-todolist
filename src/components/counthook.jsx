import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/count';

const Counter = () => {
  const dispatch = useDispatch();
  //   console.log(useSelector);
  const { count } = useSelector(state => {
    return state.count;
  });
  console.log('count', { count });
  return (
    <div>
      <div>{`count:${count}`}</div>
      <button onClick={() => dispatch(actions.increaseCount(count))}>+</button>
      <button onClick={() => dispatch(actions.decreaseCount(count))}>-</button>
    </div>
  );
};

export default Counter;
