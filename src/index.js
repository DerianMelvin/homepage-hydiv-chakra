import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import fonts from "./themes/fonts";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={fonts}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
