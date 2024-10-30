import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className="  flex flex-col gap-10 mt-14 mb-14">
      <h1 className="flex sm:text-[72px] text-2xl text-transform uppercase tracking--1 font-bold leading-none max-w-[25ch] z-40">
        {title}
      </h1>
      <p
        className={` "text-lg max-w-[50ch]",${
          isCompact
            ? "line-clamp-2 overflow-hidden flex flex-col ml-auto mr-auto z-40 sm:text-xl"
            : ""
        }`}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-gray-300 text-gray-800 w-[300px] rounded-full text-[20px] font-bold"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-2 border-gray-300 rounded-full w-[62px] h-[62px] text-gray-300">
          <FaPlus />
        </button>
      </div>
      <div>
        <div
          className="absolute inset-0 z-[-1] bg-gradient-to-b from-black to-transparent"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.7) 50%, rgba(255, 255, 255, 0) 100%)",
            height: "100vh", // Örnek yükseklik
            width: "100%", // Örnek genişlik
          }}
        ></div>
        <Image
          unoptimized
          className="h-auto z-[-2] max-h-screen object-cover "
          fill
          alt={title}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
