import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    // Render the layout structure
    <>
      {/* Header component */}
      <Header />
      {/* Main content area with padding */}
      <div style={{ padding: "20px" }}>{children}</div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Layout;
