import {
  Button,
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Movie } from "../types/MovieTypes";
import { MovieCardProps } from "../types/MovieTypes";

export function MovieCard({ movies }: MovieCardProps) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {movies.map((movie: Movie) => (
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
          ))}
        </Box>
      );
}
