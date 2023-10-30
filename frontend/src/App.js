import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
function App() {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: ["Maven Pro", "serif", "Oswald", "sans-serif"].join(","),
    },
  });
  return (
    <>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/Feed" element={<Feed />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}
export default App;
