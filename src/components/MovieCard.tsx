import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Movie, Movies } from "../types/MovieTypes";
import React from "react";
import { RemoveMovieAPI } from "../apis/RemoveMovie";

export function MovieCard({ movie }: { movie: Movie }) {

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
