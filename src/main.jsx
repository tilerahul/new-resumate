import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/store.jsx';
import { Provider } from 'react-redux';
import AppProvider from './Context/appContext.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppProvider>
      <App />
      <Toaster/>
    </AppProvider>
  </Provider>,
)
