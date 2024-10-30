import React from "react";
import Link from "next/link";

function Categories({ categories }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 sm:gap-3 gap-3 w-full mx-auto ">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className="flex bg-slate-200 text-black font-semibold sm:p-5 p-3 w-full justify-center rounded-lg hover:bg-slate-400"
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
