import { TextField, Box } from "@mui/material";
import React, {ChangeEvent} from "react";

//type Search

type SearchMovieProps = {
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchMovie({ onInputChange }: SearchMovieProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log("Keystroke:", inputValue);
    onInputChange(inputValue); // Sending inputValue to parent component
  };

  return (
    <Box component="form">
      <TextField
        sx={{ width: { sm: 200, md: 300 } }}
        label="Search"
        variant="outlined"
        onChange={handleInputChange}
      />
    </Box>
  );
}
