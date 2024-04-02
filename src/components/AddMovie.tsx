import React from "react";
import { TextField, Box, Button, Alert } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Movie } from "../types/MovieTypes";
import useMovieMutations from "../hooks/MovieMutation";
import { movieSchema } from "../validation/AddMovieSchema";

export function AddMovie() {
  const { mutate, isError, error } = useMovieMutations(); 

  const { control, handleSubmit } = useForm<Movie>({
    resolver: yupResolver(movieSchema),
    defaultValues: {
      id: 0,
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<Movie> = async (data) => {
    mutate(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box margin={2}>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              sx={{ width: { sm: 200, md: 300 } }}
              {...field}
              label="Title"
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
      </Box>
      <Box margin={2}>
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              sx={{ width: { sm: 200, md: 300 } }}
              multiline
              {...field}
              label="Description"
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
      </Box>
      <Box margin={2}>
        {isError && (
          <Alert severity="error">{error.message}</Alert>
        )}
      </Box>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
