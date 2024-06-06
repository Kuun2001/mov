import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ThemeProvider from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { SearchProvider } from "./contexts/SearchContext";

import "./GlobalCss.css";


function App() {
  const [userSearch, setUserSearch]  = useState ("")
  return (
    <BrowserRouter>
    <SearchProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
