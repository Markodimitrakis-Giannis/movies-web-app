import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieDetails from "./components/Movie";
import OmdbResults from "./components/SearchAndDisplay";

//import HeaderBar from "./components/HeaderBar";
//import SearchBar from "./components/searchAndDisplay";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="1200px"
        disableGutters
        bgcolor="white"
        marginLeft="100px"
        marginRight="100px"
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <OmdbResults />
              </>
            }
          />
          <Route
            path="/Movie/:id"
            element={
              <>
                <Header /> <MovieDetails />
              </>
            }
          />
          1
        </Routes>
      </Container>
    </>
  );
}

export default App;
