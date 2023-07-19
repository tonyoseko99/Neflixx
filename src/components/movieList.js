import React from "react";
import Image from "next/image";

function MovieList({ movies }) {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const movie = movies.map((movie, index) => {
    return (
      <div key={index} className="mb-6 md:mb-0 md:w-full">
        <Image
          loader={imageLoader}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={350}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-2 flex flex-col">
          <h2 className="text-xl font-bold h-16 md:h-20">{movie.title}</h2>
          <div className="text-sm flex items-center mt-1">
            <div className="text-gray-400">{movie.release_date}</div>
            <div className="text-orange-400 ml-2">
              {" "}
              {movie.vote_average} / 10
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mx-auto flex flex-col justify-baseline">
      <h2 className="text-5xl font-bold my-4 text-center md:text-left">Popular Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8 mx-auto px-auto">
        {movie}
      </div>
    </div>
  );
}

export default MovieList;
