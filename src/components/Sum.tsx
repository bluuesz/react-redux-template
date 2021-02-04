import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addOneOnCounter } from '../store/counter/action';

const Sum = () => {
  const dispatch = useDispatch();

  const addOne = useCallback(() => {
    dispatch(addOneOnCounter());
  }, []);

  return (
    <button type="button" onClick={addOne}>
      Somar mais um
    </button>
  );
};

export default Sum;
