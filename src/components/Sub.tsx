import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { subOneOnCounter } from '../store/counter/action';

const Sub = () => {
  const dispatch = useDispatch();

  const subOne = useCallback(() => {
    dispatch(subOneOnCounter());
  }, []);

  return (
    <button type="button" onClick={subOne}>
      Diminuir um
    </button>
  );
};

export default Sub;
