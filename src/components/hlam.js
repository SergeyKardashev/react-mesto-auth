import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
