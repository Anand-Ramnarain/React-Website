import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Heading from "../components/Heading";
import { close } from "../assets"; // Import your close image

const DesignContent = ({ theories }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL
  const theory = theories.find((item) => item.id === id); // Find the theory with the matching id

  const goBack = () => {
    navigate(-1); // Use navigate(-1) to go back
  };

  if (!theory) {
    return <div>Design not found</div>;
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        padding: "20px",
        position: "relative",
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
        <Heading tag="Design" title={theory.title} />
        {theory.content.map((content, index) => (
          <p key={index} style={{ marginBottom: "10px" }}>
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DesignContent;
