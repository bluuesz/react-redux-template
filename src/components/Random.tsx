import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRandomNumber, subRandomNumber } from '../store/counter/action';

const Random = () => {
  const [number, setNumber] = useState<number>(0);
  const dispatch = useDispatch();

  const add = useCallback((n: number) => {
    dispatch(addRandomNumber(n));
  }, []);

  const sub = useCallback((n: number) => {
    dispatch(subRandomNumber(n));
  }, []);

  return (
    <>
      <input type="number" pattern="0-9" onChange={(e) => setNumber(Number(e.target.value))} placeholder="numero" />
      <button type="button" onClick={() => add(number)}>
        add
      </button>{' '}
      <button type="button" onClick={() => sub(number)}>
        sub
      </button>
    </>
  );
};

export default Random;
