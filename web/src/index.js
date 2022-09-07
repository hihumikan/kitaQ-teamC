import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Timeline from "./pages/Timeline";
import HomePage from "./pages/homePage";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App>
                <HomePage />
              </App>
            }
          />
          <Route
            path="timeline"
            element={
              <App>
                <Timeline />
              </App>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
