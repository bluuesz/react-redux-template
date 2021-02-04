import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';

const Counter = () => {
  const counter = useSelector((state: IState) => state.counter.value);
  return (
    <>
      <h1>Counter: {counter}</h1>
    </>
  );
};

export default Counter;
