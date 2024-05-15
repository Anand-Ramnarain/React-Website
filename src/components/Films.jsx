import { useEffect, useState } from "react";
import { movies } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight, CardBorder } from "../design/Films";
import ClipPath from "../assets/svg/ClipPath";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <Section id="films">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Feel The Force, Through The Films"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {films.map((film, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${
                  movies[index % movies.length].backgroundUrl
                })`,
              }}
              key={film.episode_id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{film.title}</h5>
                <p className="body-2 mb-6 text-n-3">
                  Episode {film.episode_id}
                </p>
                <p className="body-2 mb-6 text-n-3">{film.opening_crawl}</p>
                <p className="body-2 mb-6 text-n-3">
                  Release Date: {film.release_date}
                </p>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <CardBorder />
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {movies[index % movies.length].imageUrl && (
                    <img
                      src={movies[index % movies.length].imageUrl}
                      width={380}
                      height={362}
                      alt={film.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Films;
