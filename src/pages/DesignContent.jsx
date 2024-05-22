import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { close } from "../assets";
import Slideshow from "../components/Slideshow"; // Import the Slideshow component

const DesignContent = ({ theories }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const theory = theories.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  if (!theory) {
    return <div>Design not found</div>;
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        }}
        onClick={goBack}
      ></div>
      <div
        style={{
          maxWidth: "1000px",
          margin: "100px auto 0",
          padding: "20px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          zIndex: 10000,
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
