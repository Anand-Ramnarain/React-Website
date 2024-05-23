import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";

const Header = () => {
  // State to track whether the navigation menu is open or closed
  const [openNavigation, setOpenNavigation] = useState(false);
  // Hook to access the current location
  const location = useLocation();

  // Function to toggle the navigation menu and enable/disable page scroll
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Function to handle click events and close the navigation menu
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  // Function to determine if a navigation item is active
  const isActive = (url) => {
    return location.hash === url || location.pathname + location.hash === url;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo linking to the home page */}
        <Link to="/" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Website" />
        </Link>

        {/* Navigation menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:justify-end lg:mx-auto lg:bg-transparent lg:mr-4`}
        >
          <ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Render each navigation item */}
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                    isActive(item.url)
                      ? "text-white"
                      : "text-n-3 lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger menu icon */}
          <HamburgerMenu />
        </nav>

        {/* Hamburger menu button for mobile */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
