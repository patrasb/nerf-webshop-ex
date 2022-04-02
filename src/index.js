import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';
import './scss/index.scss';
import App from './App';


const store = configureStore();
ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
