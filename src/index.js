import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {css, Global} from "@emotion/react";

// Reset CSS
const reset = css`
  * {margin: 0; padding: 0; font: inherit; box-sizing: border-box;}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global styles={reset} />
    <App />
  </>
);

