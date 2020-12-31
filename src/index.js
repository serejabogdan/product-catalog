import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import {rootReducer} from './redux/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
