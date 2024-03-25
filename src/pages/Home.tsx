import "./Home.css";
import { Box, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "../components/MovieCard";
import { AddMovie } from "../components/AddMovie";
import { SearchMovie } from "../components/SearchMovie";
import { useState } from "react";
import { Movie } from "../types/MovieTypes";

async function GetMoviesAPI() {
  try {
    const response = await fetch("http://localhost:5106/Movies");
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

function Home() {
  const [inputValue, setInputValue] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: GetMoviesAPI,
  });

  const filteredMovies = data
    ? data.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 0 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={5} margin={2}>
            <AddMovie />
          </Grid>
        </Grid>
        <Box margin={4}>
          <SearchMovie movies={data} onInputChange={setInputValue} />
        </Box>
        <Grid container justifyContent="center" alignItems="center" margin={4}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {filteredMovies.map((movie: Movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
