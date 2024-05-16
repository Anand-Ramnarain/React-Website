import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Films from "../components/Films";
import Collaboration from "../components/Collaboration";
import Art from "../components/Art";
import Theory from "../components/Theory";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Roadmap />
        <Films />
        <Theory />
        <Art />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
