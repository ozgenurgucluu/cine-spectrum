import React from "react";

import Genres from "../../mocks/genres.json";
import Movies from "../../mocks/movies.json";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({ selectedCategory }) {
  let randomIndex = Math.floor(Math.random() * Movies.results.length);

  return (
    <div>
      <FeaturedMovie movie={Movies.results[randomIndex]} />
      <Categories categories={Genres.genres.slice(0, 6)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Populer Film" movies={Movies.results.slice(1, 9)} />
      <MoviesSection
        title="Your Favorites Film"
        movies={Movies.results.slice(9, 30)}
      />
    </div>
  );
}

export default HomeContainer;
