import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { createRoot } from "react-dom/client";
import Pages from "./pages";
import GlobalStyles from "./styles";

const root = createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://odyssey-lift-off-server.herokuapp.com/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
