import { brainwaveSymbol, check } from "../assets";
import { aboutApps, aboutContent, aboutText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "../design/About";

const About = () => {
  return (
    <Section crosses id="about">
      <section className="container lg:flex">
        <article className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">A Look Into What This Is About</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {aboutContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <header className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </header>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Learn More</Button>
        </article>

        <article className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {aboutText}
          </p>

          <figure className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <section className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <section className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <section className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </section>
              </section>
            </section>

            <ul>
              {aboutApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <section
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </section>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </figure>
        </article>
      </section>
    </Section>
  );
};

export default About;
