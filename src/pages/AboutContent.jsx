import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Heading from "../components/Heading";
import { close } from "../assets"; // Import your close image

const AboutContent = ({ theories }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL
  const theory = theories.find((item) => item.id === id); // Find the theory with the matching id

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once

  const goBack = () => {
    navigate(-1); // Use navigate(-1) to go back
  };

  if (!theory) {
    return <div>About not found</div>;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
          zIndex: 9999, // Ensure it's above other content
        }}
        onClick={goBack} // Allow clicking outside the box to go back
      ></div>
      <div
        style={{
          maxWidth: "1000px",
          margin: "100px auto 0",
          padding: "20px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          zIndex: 10000, // Ensure it's above the overlay
          // backgroundColor: "#fff", // Background color of the box
        }}
      >
        {/* Close button */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={goBack}
        >
          <img
            src={close}
            alt="Close"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <Heading tag="About" title={theory.title} />
          {theory.content.map((content, index) => (
            <p key={index} style={{ marginBottom: "10px" }}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutContent;
