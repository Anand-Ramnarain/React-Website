import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router

const DesignContent = ({ theories }) => {
  const { id } = useParams(); // Get the id parameter from the URL
  const theory = theories.find((item) => item.id === id); // Find the theory with the matching id

  if (!theory) {
    return <div>Design not found</div>;
  }

  return (
    <div>
      <h1>{theory.title}</h1>
      {/* Render the design content */}
      {theory.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </div>
  );
};

export default DesignContent;
