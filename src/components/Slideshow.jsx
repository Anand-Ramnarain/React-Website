import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

const Slideshow = ({ images }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 1,
        autoplay: false,
      }).mount();
    }
  }, []);

  return (
    <>
      <style>
        {`
          .splide__slide img {
            width: 100%;
            height: 600px;
            object-fit: contain;
          }
        `}
      </style>
      <section ref={splideRef} className="splide">
        <aside className="splide__track">
          <ul className="splide__list">
            {images &&
              images.map((pic, index) => (
                <li className="splide__slide" key={index}>
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
