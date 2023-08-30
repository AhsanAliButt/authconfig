import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config/config";
import axios from "axios";

const MoviesPage = async () => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D",
    headers: {
      "X-RapidAPI-Key": "58e066474cmsh71f6d36e68b8640p1033f0jsnfd42d263a046",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  const movies = useSelector((state: RootState) => state.movies.name);
  console.log("Movies", movies);
  return <div>MoviesPage</div>;
};

export default MoviesPage;
