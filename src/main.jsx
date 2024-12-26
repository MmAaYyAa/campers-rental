import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';
import App from './components/App.jsx';
import GlobalStyles from './assets/styles/GlobalStyles.jsx';

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter >
    <GlobalStyles />
    <StrictMode>
    <App />
    </StrictMode>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  
);
