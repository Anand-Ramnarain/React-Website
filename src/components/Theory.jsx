import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import TheoryList from "./TheoryList";
import { LeftLine, RightLine } from "../design/Theory";

const Theory = () => {
  return (
    <Section className="overflow-hidden" id="theory">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="BECOME ONE WITH THE FORCE" title="The Theory Of It All" />

        <div className="relative">
          <TheoryList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/theorys"
          >
            See All Theorys
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Theory;
