import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id: movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=247de336&i=${movieId}`
      );
      console.log(res);
    };
    fetchData();
  }, [movieId]);
  return (
    <>
      <Typography>Hello</Typography>
    </>
  );
}

export default MovieDetails;
