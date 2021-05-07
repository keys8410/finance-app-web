import { DefaultTheme } from 'styled-components';
import grey from './grey';

const light: DefaultTheme = {
  palette: {
    type: 'light',
    commom: {
      black: '#000',
      white: '#fff',
      main: '#51beff',
    },
    primary: {
      main: '#FF698A',
    },
    secondary: {
      main: '#FFDD6A',
    },
    error: {
      main: '#d0342a',
    },
    background: {
      body: '#A1DBFF',
      app: '#D2E8FE',
    },
    components: {
      icon: {
        background: grey[200],
        active: '#FFDD6A',
      },
      block: {
        background: grey[50],
        inside: grey[100],
      },
      modal: {
        header: grey[500],
        closeButton: grey[500],
      },
      card: {
        categoria: {
          background: grey[100],
        },
        background: '#fff',
      },
      composition: {
        background: grey[50],
        border: '#fff',
      },
      transacao: {
        background: grey[200],
        border: grey[200],
      },
    },
    grey: grey,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    color: grey.A300,
    input: grey[700],
  },
};

export default light;
