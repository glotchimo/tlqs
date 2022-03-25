import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Test from "./Student/Test";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-ewsga7nm.us.auth0.com"
  //   clientId="4pMh2MZgYomKS287NIx3Jre4KN6H3ake"
  //   redirectUri={window.location.origin}
  // >
  //   <App />

  // </Auth0Provider>,
  <Test />,
  document.getElementById("root")
);
