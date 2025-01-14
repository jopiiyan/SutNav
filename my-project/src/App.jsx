import React from "react";
import { Navbar, Favorites, About } from "./Components";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
