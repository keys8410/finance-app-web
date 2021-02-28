import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { swrConfiguration } from './api';
import AuthProvider from './contexts/authProvider';
import ThemeToggleProvider from './contexts/ThemeToggleProvider';
import ModulesRoutes from './routes/routes.account';
import store from './store';
import { GlobalStyles } from './styles/globalStyles';
import light from './styles/theme.light';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeToggleProvider initialSchema="light">
        <AuthProvider>
          <SWRConfig value={swrConfiguration}>
            <ThemeProvider theme={light}>
              <BrowserRouter>
                <GlobalStyles />
                <ModulesRoutes onlyAuthenticated />
                <ToastContainer
                  style={{ zIndex: 99999999 }}
                  toastStyle={{ zIndex: 9999999 }}
                />
              </BrowserRouter>
            </ThemeProvider>
          </SWRConfig>
        </AuthProvider>
      </ThemeToggleProvider>
    </ReduxProvider>
  );
}
