import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/React-Website">
      <Pages />
    </Router>
  );
};

export default App;
