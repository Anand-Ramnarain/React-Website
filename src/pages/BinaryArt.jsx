// BinaryArt.jsx
import React, { useState, useEffect } from "react";
import { Container, ArtBox, ScaleBox, Line } from "../design/BinaryArt";
import Button from "../components/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const BinaryArt = ({ binaryData }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [lines, setLines] = useState([]);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (startAnimation) {
      const dataLines = binaryData.split("\n");
      setLines(dataLines);

      // Calculate the scale factor
      const lineHeight = 20; // Approximate height of a line in pixels
      const numLines = dataLines.length;
      const charWidth = 10; // Approximate width of a character in pixels
      const maxLineLength = Math.max(...dataLines.map((line) => line.length));
      const artBoxHeight = window.innerHeight * 0.78; // 80% of the viewport height
      const artBoxWidth = window.innerWidth * 0.8; // 80% of the viewport width
      const requiredHeight = numLines * lineHeight;
      const requiredWidth = maxLineLength * charWidth;

      const scaleFactorHeight = artBoxHeight / requiredHeight;
      const scaleFactorWidth = artBoxWidth / requiredWidth;

      // Set the scale to the minimum of both scale factors to maintain aspect ratio
      setScale(Math.min(scaleFactorHeight, scaleFactorWidth, 1));
    }
  }, [startAnimation, binaryData]);

  const getCharStyle = (char) => {
    return char === "0" ? { color: "white" } : { color: "yellow" };
  };

  return (
    <Container>
      <Button onClick={() => setStartAnimation(true)}>Form Art</Button>
      <ArtBox>
        {startAnimation && (
          <ScaleBox scale={scale}>
            {lines.map((line, index) => (
              <Line key={index} delay={index * 0.5}>
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
