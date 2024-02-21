import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import MenuDetailPage from './pages/MenuDetailPage';
import { Provider } from 'react-redux'
import { store } from './slices/store';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/signin' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/menu-detail/:id' element={<MenuDetailPage/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
