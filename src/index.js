import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {css, Global} from "@emotion/react";
import App from "./App";
import ErrorPage from "./components/ErrorPage";


// Reset CSS
const reset = css`
  // Fonts
  @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
  // Style
  * {margin: 0; padding: 0; font: inherit; box-sizing: border-box;}
  button {
    cursor: pointer;
  }
`;

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* 404 ERROR */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global styles={reset} />
    <Root />
  </>
);

