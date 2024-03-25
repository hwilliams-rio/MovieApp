import { TextField, Box } from "@mui/material";

export function SearchMovie({ onInputChange }: any) {

  const handleInputChange = (event : any) => {
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
