import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./pages/routing/routing";
// import { themeSettings } from "./theme";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { store } from "./store/config/config";

// const theme = () => createTheme({ themeSettings });
// console.log(theme);

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        <AppRouter />
      </Provider>
      {/* <SignUp /> */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
