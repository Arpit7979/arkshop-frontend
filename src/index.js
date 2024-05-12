import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { productsApi } from './features/productsApi';
import CartReducer, { cartTotal } from './features/CartSlice';
import authReducer, { loadUser } from './features/authSlice';

const store = configureStore({
   reducer:{
    auth:authReducer,
    cart:CartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
   },
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(cartTotal());
store.dispatch(loadUser(null));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Provider store={store}>
  <App/>
  </Provider>
</React.StrictMode>
 
);

