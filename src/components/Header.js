import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box bgcolor="yellow">
      <Box display={"flex"} alignItems="start" justifyItems={"center"}>
        <IconButton color="primary" aria-label="Home" size="large">
          <Link to={`/movies-web-app/`}>
            <HomeIcon />
          </Link>
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        paddingBottom="25px"
        marginBottom={"25px"}
        alignSelf="center"
      >
        <Box>
          <Typography
            variant="h3"
            fontFamily={"Roboto"}
            color={"black"}
            fontWeight="bold"
          >
            Movies App
          </Typography>
        </Box>
        <Box margin="2% 1%">
          <MovieIcon
            fontWeight="bold"
            marginLeft="auto"
            color="white"
            fontSize="large"
            size="large"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
