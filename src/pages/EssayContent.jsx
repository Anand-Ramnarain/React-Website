import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import TagLine from "../components/TagLine";
import { close } from "../assets";
import Slideshow from "../components/Slideshow";

const EssayContent = ({ theories }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const theory = theories.find((item) => item.id === id);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once

  if (!theory) {
    return <div>Theory not found</div>;
  }

  return (
    <>
      {/* Transparent overlay */}
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

      {/* Main content */}
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

        <Heading tag="Research" title={theory.title} />
        {theory.paragraphs.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: "10px" }}>
            {paragraph}
          </p>
        ))}
        <TagLine style={{ marginBottom: "10px" }}>Bibliography</TagLine>
        {theory.Bibliography.map((biblio, index) => (
          <p key={index} style={{ marginBottom: "10px", marginTop: "5px" }}>
            {biblio}
          </p>
        ))}
        {theory.picture && theory.picture.length > 0 && (
          <Slideshow images={theory.picture} />
        )}
      </div>
    </>
  );
};

export default EssayContent;
