import { TextField, Box, Button, Alert } from "@mui/material";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query"; // Import useQueryClient
import { movieSchema } from "../validation/AddMovieSchema";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Movie } from "../types/MovieTypes";

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export function AddMovie() {
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(""); // Add error state
  const queryClient = useQueryClient(); // Get the query client

  const { control, handleSubmit } = useForm<Movie>({
    resolver: yupResolver(movieSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  async function AddMovieAPI(data: Movie) {
    try {
      const response = await fetch("https://localhost:7146/Movies/AddMovie", {
        ...requestOptions,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setError(true);
        setErrorMessage("Failed to add movie");
      } else {
        // If movie added successfully, refetch the data
        await queryClient.refetchQueries({ queryKey: ["movies"] });
        setError(false);
      }
    } catch (error) {
      console.error("Error adding movie:", error);
      throw error;
    }
  }

  const onSubmit: SubmitHandler<Movie> = async (data) => {
    await AddMovieAPI(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} >
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
        {error && <Alert severity="error">{errorMessage}</Alert>}
      </Box>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
