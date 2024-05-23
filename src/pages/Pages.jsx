import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Layout from "../components/Layout";
import TheoryWorks from "./TheoryWorks";
import DesignWorks from "./DesignWorks";
import EssayContent from "./EssayContent";
import DesignContent from "./DesignContent";
import AboutContent from "./AboutContent";
import ArtContent from "./ArtContent";
import { theorywork, design, about, art } from "../constants/information";

const Pages = () => {
  return (
    <Router basename="/React-Website">
      <Routes>
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
        <Route
          path="/essay/:id"
          element={<EssayContent theories={theorywork} />}
        />
        <Route
          path="/design/:id"
          element={<DesignContent theories={design} />}
        />
        <Route path="/about/:id" element={<AboutContent theories={about} />} />
        <Route path="/art/:id" element={<ArtContent theories={art} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
