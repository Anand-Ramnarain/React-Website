import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import TagLine from "../components/TagLine";
import { close } from "../assets";
import Slideshow from "../components/Slideshow";

// Import all PNGs from the assets/films directory
const importAll = (r) => r.keys().map(r);
const filmImages = importAll(
  require.context("../assets/films", false, /\.png$/)
);

const EssayContent = ({ theories }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const theory = theories.find((item) => item.id === id);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);

    // Randomly select one of the film images
    const randomImage =
      filmImages[Math.floor(Math.random() * filmImages.length)];
    setBackgroundImage(randomImage);
  }, []); // Empty dependency array ensures this effect runs only once

  if (!theory) {
    return <section>Theory not found</section>;
  }

  return (
    <>
      {/* Transparent overlay with random background image */}
      <section
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
      ></section>

      {/* Main content */}
      <article
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
        {/* Close button */}
        <figure
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
        </figure>

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
      </article>
    </>
  );
};

export default EssayContent;
