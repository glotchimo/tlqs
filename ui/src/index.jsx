import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ewsga7nm.us.auth0.com"
    clientId="4pMh2MZgYomKS287NIx3Jre4KN6H3ake"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
