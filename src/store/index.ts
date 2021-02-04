import { createStore } from 'redux';
import { ICounterState } from './counter/types';

import rootReducer from './rootReducer';

export interface IState {
  counter: ICounterState;
}

const store = createStore(rootReducer);

export default store;
