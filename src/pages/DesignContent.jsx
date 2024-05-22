import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { close } from "../assets";
import Slideshow from "../components/Slideshow"; // Import the Slideshow component

const importAll = (r) => r.keys().map(r);
const filmImages = importAll(
  require.context("../assets/films", false, /\.png$/)
);

const DesignContent = ({ theories }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("");
  const theory = theories.find((item) => item.id === id);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);

    // Randomly select one of the film images
    const randomImage =
      filmImages[Math.floor(Math.random() * filmImages.length)];
    setBackgroundImage(randomImage);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!theory) {
    return <div>Design not found</div>;
  }

  return (
    <>
      {/* Transparent overlay with random background image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          backgroundColor: "#0a0321", // Background color of the box
        }}
      >
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
          <Heading tag="Design" title={theory.title} />
          {theory.content.map((content, index) => (
            <p key={index} style={{ marginBottom: "10px" }}>
              {content}
            </p>
          ))}
          {theory.picture && theory.picture.length > 0 && (
            <Slideshow images={theory.picture} />
          )}
        </div>
      </div>
    </>
  );
};

export default DesignContent;
