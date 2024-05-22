import ButtonGradient from "../assets/svg/ButtonGradient";
import useScrollToSection from "../components/useScrollToSection";
import Hero from "../components/Hero";
import Films from "../components/Films";
import About from "../components/About";
import Art from "../components/Art";
import Theory from "../components/Theory";
import Roadmap from "../components/Roadmap";

const Homepage = () => {
  useScrollToSection();
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <div id="about">
          <About />
        </div>
        <Roadmap />
        <div id="films">
          <Films />
        </div>
        <Theory />
        <div id="art">
          <Art />
        </div>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
