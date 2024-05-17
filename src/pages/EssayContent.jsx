import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router

const EssayContent = ({ theories }) => {
  const { id } = useParams(); // Get the id parameter from the URL
  const theory = theories.find((item) => item.id === id); // Find the theory with the matching id

  if (!theory) {
    return <div>Theory not found</div>;
  }

  return (
    <div>
      <h1>{theory.title}</h1>
      {/* Render the essay content */}
      {theory.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default EssayContent;
