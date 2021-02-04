import { Reducer } from 'redux';
import { CounterActionTypes, ICounterState, ICounterTypes } from './types';

const INITIAL_STATE: ICounterState = {
  value: 0,
};

const reducer: Reducer<ICounterState> = (state = INITIAL_STATE, action: CounterActionTypes) => {
  switch (action.type) {
    case ICounterTypes.ADD_ONE: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case ICounterTypes.SUB_ONE: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case ICounterTypes.ADD_RANDOM_NUMBER: {
      const { value } = action.payload;

      return {
        ...state,
        value: state.value + value,
      };
    }
    case ICounterTypes.SUB_RANDOM_NUMBER: {
      const { value } = action.payload;

      return {
        ...state,
        value: state.value - value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
