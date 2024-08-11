import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LocalContext from "./store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalContext>
      <GoogleOAuthProvider clientId="187452593958-um5jn0jgrhm64dcpavbm5i1dp7ghcn2b.apps.googleusercontent.com">
        <App></App>
      </GoogleOAuthProvider>
    </LocalContext>
    ;
  </React.StrictMode>
);
