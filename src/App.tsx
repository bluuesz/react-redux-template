import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Counter from './components/Counter';
import Sum from './components/Sum';
import Sub from './components/Sub';
import Random from './components/Random';

const App = () => (
  <Provider store={store}>
    <Counter />

    <>
      <Sum /> <Sub />
      <br />
      <br />
      <br />
      <Random />
    </>
  </Provider>
);

export default App;
