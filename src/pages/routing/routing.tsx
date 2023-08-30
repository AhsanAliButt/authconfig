import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../auth/SignIn/SignIn";
import SignUp from "../auth/SignUp/SignUp";
import MoviesPage from "../moviesPage/MoviesPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
