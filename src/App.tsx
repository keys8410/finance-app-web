import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { swrConfiguration } from './api';
import AuthProvider from './contexts/authProvider';
import ModulesRoutes from './routes/routes.account';

import store from './store';

import ThemeToggleProvider from './contexts/ThemeToggleProvider';

import { CSSReset } from './styles/reset';
import { GlobalStyles } from './styles/global';
import light from './styles/theme/light';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeToggleProvider initialSchema="light">
        <ThemeProvider theme={light}>
          <AuthProvider>
            <SWRConfig value={swrConfiguration}>
              <BrowserRouter>
                <CSSReset />
                <GlobalStyles />
                <ModulesRoutes onlyAuthenticated />
                <ToastContainer
                  style={{ zIndex: 99999999 }}
                  toastStyle={{ zIndex: 9999999 }}
                />
              </BrowserRouter>
            </SWRConfig>
          </AuthProvider>
        </ThemeProvider>
      </ThemeToggleProvider>
    </ReduxProvider>
  );
}
