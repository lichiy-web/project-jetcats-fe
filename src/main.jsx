import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
// import './reset.css';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  </StrictMode>
);
