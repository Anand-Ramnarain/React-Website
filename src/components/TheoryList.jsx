import React from "react";
import { Link } from "react-router-dom";
import { theorys } from "../constants";
import Button from "../components/Button";

const TheoryList = () => {
  return (
    <section className="flex gap-[1rem] max-lg:flex-wrap">
      {/* Map through the theories data */}
      {theorys.map((item) => (
        // Render each theory item
        <section
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          {/* Render the title of the theory */}
          <h4 className="h4 mb-4">{item.title}</h4>

          {/* Render the description of the theory */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          {/* Use Link component to get to the pages*/}
          <Link to={`/essay/${item.id}`}>
            <Button className="w-full mb-6">
              {item.link === "#" ? "Read more" : "Read more"}
            </Button>
          </Link>
        </section>
      ))}
    </section>
  );
};

export default TheoryList;
