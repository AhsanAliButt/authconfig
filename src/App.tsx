import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
// import { themeSettings } from "./theme";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = () => createTheme({ themeSettings });
// console.log(theme);

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <SignIn />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
