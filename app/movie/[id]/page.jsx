import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

async function MoviePAGE({ params }) {
  const { id } = await params;
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === id
  );
  return (
    <div>
      <MovieContainer movie={movieDetail} />{" "}
    </div>
  );
}

export default MoviePAGE;
