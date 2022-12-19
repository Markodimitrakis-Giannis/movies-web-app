import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
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
            path="/movies-web-app"
            element={
              <>
                <Header /> <OmdbResults />
              </>
            }
          />
          <Route
            path="/movies-web-app/Movie/:id"
            element={
              <>
                <Header /> <MovieDetails />
              </>
            }
          />
          <Route
            path="movies-web-app/*"
            element={
              <>
                <Header />
                <Error />
              </>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
