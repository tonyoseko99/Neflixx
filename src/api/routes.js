import axios from "axios";

// base url for all API calls
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.API_KEY;
console.log(`API KEY: ${apiKey}`);
// create a function to get popular movies
export const getPopularMovies = async () => {
  console.log(apiKey);
  try {
    // make a GET request to the API
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    // return the results of the request
    return response.data.results;
  } catch (error) {
    // log the error and return an empty array
    console.log(`Error: ${error}`);
    return [];
  }
};
