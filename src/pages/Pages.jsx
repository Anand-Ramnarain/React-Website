// Pages.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Footer from "../components/Footer";
import TheoryWorks from "./TheoryWorks";
import DesignWorks from "./DesignWorks";
import EssayContent from "./EssayContent"; // Import the component to display essay content
import DesignContent from "./DesignContent";
import { theorywork, design } from "../constants/information"; // Import the data for essay content

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/theoryworks" element={<TheoryWorks />} />
        <Route path="/design" element={<DesignWorks />} />
        {/* Define route for displaying essay content */}
        <Route
          path="/essay/:id"
          element={<EssayContent theories={theorywork} />}
        />
        {/* Define route for displaying design content */}
        <Route
          path="/design/:id"
          element={<DesignContent theories={design} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
