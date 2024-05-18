import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Heading from "../components/Heading";
import TagLine from "../components/TagLine";
import { close } from "../assets"; // Import your close image

const EssayContent = ({ theories }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const goBack = () => {
    navigate(-1); // Use navigate(-1) to go back
  };

  const theory = theories.find((item) => item.id === id);

  if (!theory) {
    return <div>Theory not found</div>;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
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

      <Heading tag="Research" title={theory.title} />
      {theory.paragraphs.map((paragraph, index) => (
        <p key={index} style={{ marginBottom: "10px" }}>
          {paragraph}
        </p>
      ))}
      <TagLine>Bibliography</TagLine>
      {theory.Bibliography.map((biblio, index) => (
        <p key={index} style={{ marginBottom: "10px" }}>
          {biblio}
        </p>
      ))}
    </div>
  );
};

export default EssayContent;
