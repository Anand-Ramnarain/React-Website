import ButtonGradient from "../assets/svg/ButtonGradient";
import useScrollToSection from "../components/useScrollToSection";
import Hero from "../components/Hero";
import Films from "../components/Films";
import About from "../components/About";
import Art from "../components/Art";
import Theory from "../components/Theory";
import Roadmap from "../components/Roadmap";

const Homepage = () => {
  // Use custom hook for scrolling functionality
  useScrollToSection();
  return (
    <>
      <section className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <section id="about">
          <About />
        </section>
        <Roadmap />
        <section id="films">
          <Films />
        </section>
        <Theory />
        <section id="art">
          <Art />
        </section>
      </section>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
