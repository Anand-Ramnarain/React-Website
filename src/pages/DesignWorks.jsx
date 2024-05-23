import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Button from "../components/Button";
import { GradientLight, CardBorder } from "../design/TheoryWorks";
import ClipPath from "../assets/svg/ClipPath";
import { design } from "../constants/information";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { Link } from "react-router-dom";

const DesignWorks = () => {
  // Initialize state for design works
  const [works, setWorks] = useState([]);

  // Fetch design works data on component mount
  useEffect(() => {
    setWorks(design); // Set design works data to state
  }, []);

  // Function to render a shortened version of paragraphs
  const renderShortenedParagraph = (paragraphs) => {
    // Truncate paragraphs to show only a few lines followed by ...
    const truncatedText = paragraphs.join(" ").substring(0, 150);
    return `${truncatedText}...`;
  };

  return (
    <Section id="design">
      <article className="container relative z-2">
        <Heading tag="Design The Force" title="Explore Design Works" />

        {/* Display design works */}
        <section className="flex flex-wrap gap-10 mb-10">
          {works.map((work) => (
            <article
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[28rem]"
              key={work.id}
            >
              <section className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                {/* Display work title */}
                <h5 className="h5 mb-5">{work.title}</h5>
                {/* Display work date */}
                <p className="body-2 mb-6 text-n-3">{work.date}</p>
                {/* Display truncated content */}
                <p className="body-2 mb-6 text-n-3">
                  {renderShortenedParagraph(work.content)}
                </p>
                <section>
                  <Button as={Link} to={`/design/${work.id}`}>
                    Read More
                  </Button>
                </section>
              </section>

              {/* Display gradient light effect */}
              <GradientLight />

              {/* Display card border */}
              <aside
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <CardBorder />
              </aside>

              <ClipPath />
            </article>
          ))}
          <ButtonGradient />
        </section>
      </article>
    </Section>
  );
};

export default DesignWorks;
