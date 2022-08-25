import React from 'react';
import ReactDOM from 'react-dom/client';
import MainLayout from './common/components/MainLayout';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core/styles";

import {
  BrowserRouter,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MainLayout>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MainLayout>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
