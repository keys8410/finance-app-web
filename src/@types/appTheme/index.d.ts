import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      type: string;
      commom: {
        black: string;
        white: string;
        main: string;
      };
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      error: {
        main: string;
      };
      background: {
        body: string;
        app: string;
      };
      components: {
        icon: Icon;
        block: Block;
        modal: Modal;
        card: {
          categoria: Categoria;
          background: string;
        };
        composition: Composition;
        transacao: Transacao;
      };
      grey: GreyTheme;
      text: Text;
    };
    typography: {
      color: string;
      input: string;
    };
  }
}

export interface CommomLogin {
  inside: string;
  outside: string;
}
export interface Icon {
  background: string;
  active: string;
}

export interface Block {
  background: string;
  inside: string;
}

export interface Modal {
  header: string;
  closeButton: string;
  background: string;
  outside: string;
}

export interface Categoria {
  background: string;
}

export interface Composition {
  background: string;
  border: string;
}

export interface Transacao {
  background: string;
  border: string;
}

export interface Text {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface GreyTheme {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A300: string;
  A400: string;
  A700: string;
}
