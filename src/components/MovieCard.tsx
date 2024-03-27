import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Movie, Movies } from "../types/MovieTypes";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

// can't figure this one out
export function MovieCard({ movie }: { movie: Movie }) {
  const queryClient = useQueryClient(); // Get the query client

  async function RemoveMovieAPI(movieId: number) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    try {
      await fetch(`https://localhost:7146/Movies/DeleteMovie?id=${movieId}`, {
        ...requestOptions,
      });

      await queryClient.refetchQueries({ queryKey: ["movies"] });
    } catch (error) {
      console.error("Error deleting movie:", error);
      throw error;
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }} key={movie.title}>
      <CardContent>
        <Button onClick={() => RemoveMovieAPI(movie.id)}>Delete</Button>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Like
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Dislike
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
