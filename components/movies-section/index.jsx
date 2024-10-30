import Link from "next/link";
import React from "react";
import Image from "next/image";

function MoviesSection({ title, movies }) {
  console.log("moviesection", title);
  return (
    <div className="w-full mt-8  ">
      <h3 className="text-white text-xl uppercase mb-6">{title}</h3>
      <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-8 gap-1  ">
        {movies.map((movie) => (
          <div key={movie.id} className="relative  sm:min-h-80">
            <Link href={`/movie/${movie.id}`}>
              <Image
                className="object-cover rounded-md z-50 transform hover:scale-[1.1] ease-in-out duration-300  "
                fill
                unoptimized
                alt="Description"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
