import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateApplication from "../src/components/CreateApplication/CreateApplication";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateApplication />} />
      </Routes>
    </Router>
  );
};

export default App;
