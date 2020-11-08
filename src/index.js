import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AppComponent from './AppComponent'

import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <AppComponent/> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
