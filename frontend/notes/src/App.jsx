import React from "react";
import Signup from "./pages/Signup/Signup";
import { Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Signup />
      </Router>
    </div>
  );
};

export default App;
