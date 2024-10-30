import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <header className="container bg-gradient-to-b sm:p-5 sm:text-xl  from-black/80 to-transparent flex flex-col sm:flex-row items-center justify-between p-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-md tracking-2 font-bold text-white"
        >
          <FaPlayCircle />
          CINESPECTRUM
        </Link>
      </div>
      <nav className="flex  sm:flex-row gap-4 text-md tracking-2 font-bold text-white">
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Kids</Link>
      </nav>
    </header>
  );
}

export default Header;
