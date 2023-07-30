import axios from "axios";
import { savePopularMovies } from "../Reducers/tmdbReducer";

export const asyncGetPopularMovies = () => async (dispatch, getState) => {
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    console.log(api_key);
    // console.log(data);
    dispatch(savePopularMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
