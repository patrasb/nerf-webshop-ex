import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';
import './scss/index.scss';
import App from './App';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


const store = configureStore();

let persistor = persistStore(store);

ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<div>loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
