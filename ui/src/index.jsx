import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth0Provider } from "@auth0/auth0-react";

const theme = createTheme({
  palette: {
    primary: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      disabled: '#000'
    },
  },
});

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-ewsga7nm.us.auth0.com"
  //   clientId="4pMh2MZgYomKS287NIx3Jre4KN6H3ake"
  //   redirectUri={window.location.origin}
  // >
  //   <App />

  // </Auth0Provider>,
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
