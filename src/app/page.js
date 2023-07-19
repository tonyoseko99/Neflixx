"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getPopularMovies } from "@/api/routes";
import MovieList from "@/components/movieList";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  return (
    <main className="container mx-auto min-h-screen px-4">
      {/* Filter Movies */}
      <div className="flex flex-col md:flex-row justify-between items-center my-4">
        <h1 className="text-5xl text-gray-400 font-bold mb-4">Movies</h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label htmlFor="filter" className="text-xl font-bold mr-2">
            Filter:
          </label>
          <select
            name="filter"
            id="filter"
            className="bg-gray-900 text-gray-400"
          >
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      </div>
      <MovieList movies={movies} />
    </main>
  );
}
