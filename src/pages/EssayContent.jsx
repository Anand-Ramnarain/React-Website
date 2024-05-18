import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/Heading";
import TagLine from "../components/TagLine";

const EssayContent = ({ theories }) => {
  const { id } = useParams();
  const theory = theories.find((item) => item.id === id);

  if (!theory) {
    return <div>Theory not found</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
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
