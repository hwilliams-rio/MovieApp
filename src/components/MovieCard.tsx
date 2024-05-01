import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Movie, Movies } from "../types/MovieTypes";
import  useMovieMutations from "../hooks/useMovieMutations";

export function MovieCard({ movie }: { movie: Movie }) {
  const { removeMovieMutation } = useMovieMutations();

  const handleDelete = async () => {
    removeMovieMutation.mutate(movie.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={movie.title}>
      <CardContent>
        <Button onClick={handleDelete}>Delete</Button>
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
