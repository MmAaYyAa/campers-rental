import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App.jsx';
import GlobalStyles from './assets/styles/GlobalStyles.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <GlobalStyles />
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
