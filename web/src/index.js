import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/m-plus-rounded-1c"; 
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
