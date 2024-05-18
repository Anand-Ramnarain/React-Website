import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Films from "../components/Films";
import About from "../components/About";
import Art from "../components/Art";
import Theory from "../components/Theory";
import Roadmap from "../components/Roadmap";

const Homepage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Roadmap />
        <Films />
        <Theory />
        <Art />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
