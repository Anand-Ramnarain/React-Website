import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { close } from "../assets";
import Slideshow from "../components/Slideshow";
import BinaryArt from "./BinaryArt";
import { imageToBinary } from "../components/imageToBinary";
import artImage from "../assets/binaryart/image-1.png";

// Function to import all film images from the assets folder
const importAll = (r) => r.keys().map(r);
const filmImages = importAll(
  require.context("../assets/films", false, /\.png$/)
);

const ArtContent = ({ theories }) => {
  // Initialize variables
  const navigate = useNavigate();
  const { id } = useParams();
  const [binaryData, setBinaryData] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const theory = theories.find((item) => item.id === id);

  // Effect hook to set up random background image and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    const randomImage =
      filmImages[Math.floor(Math.random() * filmImages.length)];
    setBackgroundImage(randomImage);
  }, []);

  useEffect(() => {
    async function convertImage() {
      try {
        const binary = await imageToBinary(artImage);
        setBinaryData(binary);
      } catch (error) {
        console.error("Error converting image to binary:", error);
      }
    }
    convertImage();
  }, []);

  // Function to handle going back
  const goBack = () => {
    navigate(-1);
  };

  if (!theory) {
    return <section>Design not found</section>;
  }

  return (
    <>
      {/* Background overlay */}
      <section
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 9999,
        }}
        onClick={goBack}
      ></section>

      {/* Content section */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "100px auto 0",
          padding: "20px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          zIndex: 10000,
          backgroundColor: "#0a0321",
        }}
      >
        {/* Close button */}
        <aside
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
        </aside>

        {/* Main content */}
        <article
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <Heading tag="Design" title={theory.title} />
          <BinaryArt binaryData={binaryData} />
          {/* Render theory content */}
          {theory.content.map((content, index) => (
            <p key={index} style={{ marginBottom: "10px" }}>
              {content}
            </p>
          ))}
          {/* Render slideshow if pictures are available */}
          {/* {theory.picture && theory.picture.length > 0 && ( */}
          {/* <Slideshow images={theory.picture} /> */}
          {/* )} */}
        </article>
      </section>
    </>
  );
};

export default ArtContent;
