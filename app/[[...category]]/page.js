import HomeContainer from "@/containers/home";
import React from "react";

import Movies from "@/mocks/movies.json";

async function Home({ params }) {
  const { category } = await params;
  console.log("category", category);
  let selectedCategory;

  if (category?.length > 0) {
    selectedCategory = true;
  }
  console.log("categories", category?.[0]);
  return (
    <HomeContainer
      selectedCategory={{
        id: category?.[0] ?? "",
        movies: Movies.results
          .filter((movie) => movie.genre_ids.includes(Number(category?.[0])))
          .slice(0, 7),
      }}
    />
  );
}

export default Home;
