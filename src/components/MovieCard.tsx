import { Card, CardContent, Typography } from "@mui/material";

export function MovieCard({ movie }: any) {
  return (
    <Card sx={{ maxWidth: 345 }} key={movie.title}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
