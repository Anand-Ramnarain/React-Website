// StyledComponents.jsx
import styled, { keyframes } from "styled-components";

// Keyframes for the floating-up animation
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

// Styled container for the main component
export const Container = styled.div`
  height: 100vh;
`;

// ArtBox with blue and red gradient border
export const ArtBox = styled.div`
  font-family: Source Code Pro, monospace;
  white-space: pre;
  width: 105%;
  height: 76%;
  overflow: hidden;
  border: 2px solid;
  border-image: linear-gradient(to right, blue, red) 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// ScaleBox for scaling the content
export const ScaleBox = styled.div`
  transform: scale(${(props) => props.scale});
  transform-origin: top;
  width: 100%;
  height: 100%;
`;

// Line component for each line of binary art
export const Line = styled.div`
  animation: ${floatUp} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
