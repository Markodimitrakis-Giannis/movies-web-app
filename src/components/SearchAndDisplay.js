import SearchIcon from "@mui/icons-material/Search";
import { Box, Pagination, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const OmdbResults = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [movieId, setMovieId] = useState(" ");
  const [totalPages, setTotalPages] = useState(0);
  const SearchForm = useRef(null);
  const IdForm = useRef(null);

  useEffect(() => {
    const fetchDataName = async () => {
      let res = "";
      if (searchTerm.length !== 0) {
        res = await axios.get(
          `http://www.omdbapi.com/?apikey=247de336&s=${searchTerm}&i=${movieId}&page=${page}`
        );
        setMovies(res.data.Search);
        setTotalPages(res.data.totalResults);
      } else if (movieId.length !== 0) {
        res = await axios.get(
          `http://www.omdbapi.com/?apikey=247de336&i=${movieId}`
        );
        setMovies([res.data]);
        setTotalPages(1);
      } else {
        setMovies(0);
        setTotalPages(0);
      }
    };
    fetchDataName();
  }, [page, searchTerm, movieId]);

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  const handleChangeInSearchTerm = (event) => {
    SearchForm.current.value = event.target.value;
  };
  const handleChangeInSearchId = (event) => {
    IdForm.current.value = event.target.value;
  };

  const handleSearchSubmitName = () => {
    clearIdSearch();
    IdForm.current.value = "";
    setPage(1);
    setSearchTerm(SearchForm.current.value.trim());
  };

  const clearInputSearch = () => {
    setSearchTerm("");
    document.getElementById("form1").value = "";
  };

  const clearIdSearch = () => {
    setMovieId("");
    document.getElementById("form2").value = "";
  };
  const handleSearchSubmitId = () => {
    clearInputSearch();
    SearchForm.current.value = "";
    setPage(1);
    setMovieId(IdForm.current.value.trim());
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Box
          display="flex"
          marginTop={"10px"}
          alignItems="center"
          justifyContent={"center"}
        >
          <TextField
            label="Search by name or IMDb ID"
            onChange={handleChangeInSearchTerm}
            id="form1"
            ref={SearchForm}
            sx={{
              width: { sm: 300, md: 600 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
          />
        </Box>
        <Box
          display="flex"
          marginTop={"10px"}
          marginLeft="0.2%"
          alignItems="center"
          justifyContent={"center"}
        >
          <Button
            onClick={handleSearchSubmitName}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: { sm: 100, md: 200 },
              height: 45,
              marginleft: "0px",
            }}
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Box
          display="flex"
          marginTop={"10px"}
          alignItems="center"
          justifyContent={"center"}
        >
          <TextField
            label="Search by name or IMDb ID"
            onChange={handleChangeInSearchId}
            ref={IdForm}
            id="form2"
            sx={{
              width: { sm: 300, md: 600 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
          />
        </Box>
        <Box
          display="flex"
          marginTop={"10px"}
          marginLeft="0.2%"
          alignItems="center"
          justifyContent={"center"}
        >
          <Button
            onClick={handleSearchSubmitId}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: { sm: 100, md: 200 },
              height: 45,
              marginleft: "0px",
            }}
            endIcon={<SearchIcon />}
          >
            Search by Id
          </Button>
        </Box>
      </Box>
      <Stack spacing={2} margin="2% 2%" alignContent={"center"}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "gray",
                }}
              >
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Imdb ID</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">See Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies &&
                movies.map((movie) => (
                  <TableRow key={movie.imdbID}>
                    <TableCell align="center">{movie.Title}</TableCell>
                    <TableCell align="center">{movie.Year}</TableCell>
                    <TableCell align="center">{movie.imdbID}</TableCell>
                    <TableCell align="center">{movie.Type}</TableCell>
                    <TableCell align="center">
                      {movie.imdbID ? (
                        <Link to={`/Movie/${movie.imdbID}`}>
                          Click to see Details
                        </Link>
                      ) : (
                        <></>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent={"center"} alignItems="center">
          <Pagination
            variant="outlined"
            shape="rounded"
            count={
              Math.ceil(totalPages / 10) > 0 ? Math.ceil(totalPages / 10) : 0
            }
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default OmdbResults;
