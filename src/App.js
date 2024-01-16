import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <Greeting />
  </Provider>
);

export default App;
