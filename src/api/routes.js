import { axios } from "./index";

const API_KEY = "4238bc314d204686b7a2facadc1326e3";

// GET request for list of all movies ordered by popularity
export const getPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return response.data.results;
};
