import Section from "./Section";
import Heading from "./Heading";
import Button from "../components/Button";
import { service1, check } from "../assets";
import { artcheck } from "../constants";
import { Gradient } from "../design/Art";
import { Link } from "react-router-dom";

import Generating from "./Generating";

const Art = () => {
  return (
    <Section id="art">
      <article className="container">
        <Heading
          title="See The Force In The Art"
          text="Unlock the potential of art"
        />

        <section className="relative">
          <figure className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <aside className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="art"
                height={730}
                src={service1}
              />
            </aside>

            <section className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Internet Art</h4>
              <p className="body-2 mb-[3rem] text-n-3">Art within the Galaxy</p>
              <ul className="body-2">
                {artcheck.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <Button as={Link} to={`/art/0`}>
                View Art
              </Button>
            </section>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </figure>

          <Gradient />
        </section>
      </article>
    </Section>
  );
};

export default Art;
