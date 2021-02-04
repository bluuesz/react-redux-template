import { action } from 'typesafe-actions';
import { ICounterTypes } from './types';

export const addOneOnCounter = () => action(ICounterTypes.ADD_ONE);
export const subOneOnCounter = () => action(ICounterTypes.SUB_ONE);

export const addRandomNumber = (n: number) => action(ICounterTypes.ADD_RANDOM_NUMBER, { value: n });
export const subRandomNumber = (n: number) => action(ICounterTypes.SUB_RANDOM_NUMBER, { value: n });
