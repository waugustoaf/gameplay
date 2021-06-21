import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#0d133d',
    heading: '#dde3f0',
    primary: '#e51c44',
    line: '#991f36'
  },
};

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
