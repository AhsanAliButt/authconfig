import "./App.css";
import SignUp from "./pages/auth/SignUp/SignUp";
import AppRouter from "./pages/routing/routing";
// import { themeSettings } from "./theme";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = () => createTheme({ themeSettings });
// console.log(theme);

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <AppRouter />
      {/* <SignUp /> */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
