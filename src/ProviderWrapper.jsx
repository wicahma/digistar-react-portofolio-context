import React from "react";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";

const ProviderWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default ProviderWrapper;
