import { DefaultTheme } from 'styled-components';
import grey from './grey';
import { darken } from 'polished';

const dark: DefaultTheme = {
  palette: {
    type: 'dark',
    commom: {
      black: '#000',
      white: '#fff',
      main: '#1565c0',
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
      body: grey.A400,
      app: darken(0.75, '#F4F4F4'),
    },
    components: {
      icon: {
        background: '#F4F4F4',
        active: '#FFDD6A',
      },
      block: {
        background: grey[900],
        inside: grey.A100,
      },
      modal: {
        header: grey[500],
        closeButton: grey[500],
      },
      card: {
        categoria: {
          background: grey[100],
        },
        background: grey[800],
      },
      composition: {
        background: grey[800],
        border: grey[800],
      },
      transacao: {
        background: grey[700],
        border: grey[700],
      },
    },
    grey,
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    color: grey[100],
    input: '#111',
  },
};

export default dark;
