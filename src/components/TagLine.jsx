import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    // Render the tagline with brackets and children
    <section className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")} {/* Left bracket */}
      <div className="mx-3 text-n-3">{children}</div> {/* Children */}
      {brackets("right")} {/* Right bracket */}
    </section>
  );
};

export default TagLine;
