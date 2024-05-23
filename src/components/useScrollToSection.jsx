import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = () => {
  // Get the current location using useLocation hook
  const location = useLocation();

  // Effect to scroll to the section when location changes
  useEffect(() => {
    // Check if the location hash exists
    if (location.hash) {
      // Select the element with the specified hash
      const element = document.querySelector(location.hash);
      // If the element exists, scroll to it smoothly
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Trigger the effect whenever the location changes
};

export default useScrollToSection;
