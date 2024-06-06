import React, { useState, useEffect } from "react";
import { Container, ArtBox, ScaleBox, Line } from "../design/BinaryArt";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

// Define the BinaryArt functional component, which takes binaryData as a prop.
const BinaryArt = ({ binaryData }) => {
  // startAnimation controls whether the animation should start.
  // lines stores the lines of binary data.
  // scale determines the scaling factor for the art display.
  const [startAnimation, setStartAnimation] = useState(false);
  const [lines, setLines] = useState([]);
  const [scale, setScale] = useState(1);

  // useEffect hook to handle side effects when startAnimation or binaryData changes.
  useEffect(() => {
    // Only execute if startAnimation is true.
    if (startAnimation) {
      // Split the binary data into individual lines.
      const dataLines = binaryData.split("\n");
      // Set the lines state with the split binary data.
      setLines(dataLines);

      // Define approximate dimensions for each character and line.
      const lineHeight = 20;
      const numLines = dataLines.length; // Number of lines in the binary data.
      const charWidth = 10;
      const maxLineLength = Math.max(...dataLines.map((line) => line.length)); // Longest line length in characters.

      // Define the dimensions of the art box as a percentage of the viewport. THis is so the binary art can fit in the box.
      const artBoxHeight = window.innerHeight * 0.78; // 78% of the viewport height.
      const artBoxWidth = window.innerWidth * 0.8; // 80% of the viewport width.

      // Calculate the required dimensions to fit all lines and characters.
      const requiredHeight = numLines * lineHeight;
      const requiredWidth = maxLineLength * charWidth;

      // Calculate scale factors to fit the content within the art box dimensions.
      const scaleFactorHeight = artBoxHeight / requiredHeight;
      const scaleFactorWidth = artBoxWidth / requiredWidth;

      // Set the scale state to the smaller of the two scale factors, ensuring the art maintains its aspect ratio.
      setScale(Math.min(scaleFactorHeight, scaleFactorWidth, 1));
    }
  }, [startAnimation, binaryData]);

  // Function to get the style for each character based on its value.
  const getCharStyle = (char) => {
    // Return an object with the appropriate color based on whether the character is '0' or '1'.
    return char === "0" ? { color: "white" } : { color: "yellow" };
  };

  return (
    <Container>
      <section className="flex justify-center mt-12 md:mt-15 xl:mt-20 mb-5">
        <Button onClick={() => setStartAnimation(true)}>Form Art</Button>
      </section>
      <ArtBox>
        {/* Render the ScaleBox and lines of binary data if the animation has started */}
        {startAnimation && (
          <ScaleBox scale={scale}>
            {/* Map over each line of binary data */}
            {lines.map((line, index) => (
              <Line key={index} delay={index * 0.5}>
                {/* Map over each character in the current line */}
                {line.split("").map((char, charIndex) => (
                  <span key={charIndex} style={getCharStyle(char)}>
                    {char}
                  </span>
                ))}
              </Line>
            ))}
          </ScaleBox>
        )}
      </ArtBox>
      <ButtonGradient />
    </Container>
  );
};

export default BinaryArt;
