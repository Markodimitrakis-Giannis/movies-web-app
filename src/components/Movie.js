import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBkey}&i=${movieId}`
      );

      setMovie(res.data);
    };
    fetchData();
  }, [movieId]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        {movie && (
          <Card
            sx={{
              width: "40%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: 1,
              backgroundColor: "violet",
              marginBottom: "2%",
            }}
            variant="outlined"
          >
            <CardMedia
              component="img"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              height="38%"
              width={"70%"}
              image={movie.Poster}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                textAlign={"center"}
                component="div"
                fontFamily={"Roboto"}
              >
                {movie.Title}
              </Typography>
              <Typography
                variant="body"
                color="text.secondary"
                fontFamily={"Roboto"}
              >
                {movie.Plot}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h5" fontFamily={"Roboto"}>
                  Released: {movie.Year}
                </Typography>
                <Typography variant="h5" fontFamily={"Roboto"}>
                  Actors: {movie.Actors}
                </Typography>
                <Typography variant="h5" fontFamily={"Roboto"}>
                  Director: {movie.Director}
                </Typography>
                <Typography variant="h5" fontFamily={"Roboto"}>
                  Rating: {movie.imdbRating}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        )}
      </Box>
    </>
  );
}

export default MovieDetails;
