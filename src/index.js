import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
let store = applyMiddleware(thunk)(createStore)(rootReducer)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
);
reportWebVitals();
