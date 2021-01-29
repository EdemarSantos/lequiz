import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import { createMuiTheme } from '@material-ui/core/styles';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: lightyellow;
  }
`

const theme = db.theme;

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
