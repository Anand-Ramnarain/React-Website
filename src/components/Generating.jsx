import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    // Render the loading indicator section
    <section
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Loading icon */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      {/* Loading message */}
      The Force Is Within You
    </section>
  );
};

export default Generating;
