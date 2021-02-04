export interface ICounterState {
  value: number;
}

export enum ICounterTypes {
  ADD_ONE = '@counter/ADD_ONE',
  SUB_ONE = '@counter/SUB_ONE',
  ADD_RANDOM_NUMBER = '@counter/ADD_RANDOM_NUMBER',
  SUB_RANDOM_NUMBER = '@counter/SUB_RANDOM_NUMBER',
}

interface AddOneOnCounter {
  type: ICounterTypes.ADD_ONE;
}

interface SubOneOnCounter {
  type: ICounterTypes.SUB_ONE;
}

interface AddRandomNumberOnCounter {
  type: ICounterTypes.ADD_RANDOM_NUMBER;
  payload: ICounterState;
}

interface SubRandomNumberOnCounter {
  type: ICounterTypes.SUB_RANDOM_NUMBER;
  payload: ICounterState;
}

export type CounterActionTypes =
  | AddOneOnCounter
  | SubOneOnCounter
  | AddRandomNumberOnCounter
  | SubRandomNumberOnCounter;
