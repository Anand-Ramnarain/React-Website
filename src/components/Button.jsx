import React from "react";
import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, to, onClick, children, px, white }) => {
  // Construct the class string for the button
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  // Class string for the span element
  const spanClasses = "relative z-10";

  // Render the button element
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Render the link element
  const renderLink = () => (
    <Link to={to} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  // Conditionally render either a link or a button based on the 'to' prop
  return to ? renderLink() : renderButton();
};

export default Button;
