import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { apolloClient } from "./graphql"
import { ApolloProvider } from "@apollo/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
