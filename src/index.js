import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AppComponent from './AppComponent'

import { Provider } from 'react-redux'
import store from './redux/store';
import SelectWithList from './latihan/SelectWithList';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './latihan/PostPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PostPage/>
      {/* <SelectWithList/> */}
      {/* <App /> */}
      {/* <AppComponent/> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
