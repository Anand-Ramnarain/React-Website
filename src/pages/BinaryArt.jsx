import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const floatUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ArtBox = styled.div`
  font-family: Source Code Pro, monospace;
  white-space: pre;
  width: 40%;
  height: 74%;
  overflow: hidden;
  border: 2px solid green;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScaleBox = styled.div`
  transform: scale(${(props) => props.scale});
  transform-origin: top;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  animation: ${floatUp} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  line-height: 1.2; /* Adjust line-height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
`;

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
              <Line key={index} delay={index * 1}>
                {" "}
                {/* Adjust delay as needed */}
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
    </Container>
  );
};

export default BinaryArt;
