import { moviesData } from "../../components/commonComponents/data/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/config/config";

const useMovies = () => {
  const data = useSelector((state: RootState) => state.movies.data);

  const dispatch = useDispatch();
  //   console.log("moviesData", moviesData);
  dispatch(data(moviesData));
  return [moviesData];
};

export default useMovies;
