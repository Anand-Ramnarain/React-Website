import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <section
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Render the tagline if provided */}
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {/* Render the title if provided */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Render the text if provided */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </section>
  );
};

export default Heading;
