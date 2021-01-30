import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import { createMuiTheme } from '@material-ui/core/styles';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #c4e7be;

    display: flex; 
    flex-direction: column; 
    font-family: 'Lato', sans-serif; 
    color: ${({ theme }) => theme.colors.contrastText};

    html, body {
      min-height: 100vh;
    }
  }
`;
const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
