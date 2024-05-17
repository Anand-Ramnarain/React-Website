import Heading from "../components/Heading";
import Section from "../components/Section";
import Button from "../components/Button";
import { GradientLight, CardBorder } from "../design/TheoryWorks";
import ClipPath from "../assets/svg/ClipPath";
import { theorywork } from "../constants/information"; // Import theorywork data
import ButtonGradient from "../assets/svg/ButtonGradient";
import { Link } from "react-router-dom";

const TheoryWorks = () => {
  const renderShortenedParagraph = (paragraphs) => {
    // Truncate paragraphs to show only a few lines followed by ...
    const truncatedText = paragraphs.join(" ").substring(0, 150);
    return `${truncatedText}...`;
  };

  return (
    <Section id="theoryworks">
      <article className="container relative z-2">
        <Heading
          tag="Learn The Theory Of The Force"
          title="Explore Theory Works"
        />

        <section className="flex flex-wrap gap-10 mb-10">
          {theorywork.map((item) => (
            <article
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[28rem]"
              key={item.id}
            >
              <section className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.date}</p>
                <p className="body-2 mb-6 text-n-3">
                  {renderShortenedParagraph(item.paragraphs)}
                </p>
                <section>
                  <Button as={Link} to={`/essay/${item.id}`}>
                    Read More
                  </Button>
                </section>
              </section>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <CardBorder />
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {/* If you have an image for the theorywork, you can include it here */}
                  {/* <img
                      src={work.imageUrl}
                      width={380}
                      height={362}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    /> */}
                </div>
              </div>

              <ClipPath />
            </article>
          ))}
          <ButtonGradient />
        </section>
      </article>
    </Section>
  );
};

export default TheoryWorks;
