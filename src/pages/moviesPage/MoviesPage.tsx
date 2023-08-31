import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config/config";
import { moviesData } from "../../components/commonComponents/data/data";
// import { addmovies } from "../../store/slicers/movieSlice";
import { styled } from "@mui/material/styles";
import MovieCard from "../../components/commonComponents/moviecard/MovieCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { addmovies } from "../../store/slicers/movieSlice";
import { useEffect } from "react";

const MoviesPage = () => {
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action with the initial movie data
    if (movies.length === 0) {
      dispatch(addmovies(moviesData));
    } else {
      ("");
    }
  }, [movies]);

  // dispatch(addmovies(moviesData)

  console.log("movies", movies);
  // const moviesD = movies[0];
  // console.log("moviesD", moviesD);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {moviesData.map((data, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <MovieCard
                title={data.title}
                description={data.description}
                year={data.year}
                votes={data.votes}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <div></div>
    </>
  );
};

export default MoviesPage;
