import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide CSS
import Splide from "@splidejs/splide"; // Import Splide library

const Slideshow = ({ images }) => {
  const splideRef = useRef(null); // Reference for Splide instance

  // Initialize Splide when component mounts
  useEffect(() => {
    // Check if splideRef is available
    if (splideRef.current) {
      // Initialize Splide with options
      new Splide(splideRef.current, {
        type: "loop", // Enable loop for continuous slideshow
        perPage: 1, // Number of slides to display at once
        autoplay: false, // Disable autoplay
      }).mount(); // Mount Splide instance
    }
  }, []); // Only runs on component mount

  return (
    <>
      {/* Inline style for slide images */}
      <style>
        {`
          .splide__slide img {
            width: 100%;
            height: 600px;
            object-fit: contain;
          }
        `}
      </style>
      {/* Splide container */}
      <section ref={splideRef} className="splide">
        <aside className="splide__track">
          <ul className="splide__list">
            {/* Map through images to create slide elements */}
            {images &&
              images.map((pic, index) => (
                <li className="splide__slide" key={index}>
                  {/* Display image */}
                  <img src={pic} alt={`Slide ${index + 1}`} />
                </li>
              ))}
          </ul>
        </aside>
      </section>
    </>
  );
};

export default Slideshow;
