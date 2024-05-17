// Pages.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import TheoryWorks from "./TheoryWorks";
import DesignWorks from "./DesignWorks";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/theoryworks" element={<TheoryWorks />} />
      <Route path="/design" element={<DesignWorks />} />
    </Routes>
  );
};

export default Pages;
