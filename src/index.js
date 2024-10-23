import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
          <App />
          <Analytics/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);