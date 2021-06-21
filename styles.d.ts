import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [x: string]: string;
    };
  }
}
