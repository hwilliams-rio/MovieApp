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
    const response = await fetch("https://localhost:7146/Movies/GetAllMovies");
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
      <Box>
        <AddMovie />
        <Box margin={2}>
          <SearchMovie onInputChange={setInputValue} />
        </Box>
        <Box margin={4}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {filteredMovies.map((movie: Movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
