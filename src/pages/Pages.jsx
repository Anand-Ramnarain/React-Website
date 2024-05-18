import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Layout from "../components/Layout";
import TheoryWorks from "./TheoryWorks";
import DesignWorks from "./DesignWorks";
import EssayContent from "./EssayContent";
import DesignContent from "./DesignContent";
import { theorywork, design } from "../constants/information";

const Pages = () => {
  return (
    <Routes>
      {/* Wrap the first three routes in the Layout component */}
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path="/theoryworks"
        element={
          <Layout>
            <TheoryWorks />
          </Layout>
        }
      />
      <Route
        path="/design"
        element={
          <Layout>
            <DesignWorks />
          </Layout>
        }
      />
      {/* Define route for displaying essay content */}
      <Route
        path="/essay/:id"
        element={<EssayContent theories={theorywork} />}
      />
      {/* Define route for displaying design content */}
      <Route path="/design/:id" element={<DesignContent theories={design} />} />
    </Routes>
  );
};

export default Pages;
