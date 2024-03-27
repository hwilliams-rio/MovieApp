import { Movie } from "../types/MovieTypes";

export async function AddMovieAPI(data: Movie) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

    try {
      const response = await fetch("https://localhost:7146/Movies/AddMovie", {
        ...requestOptions,
        body: JSON.stringify(data),
      });

      console.log("Response:", response);
      return response;
      
    } catch (error) {
      console.error("Error adding movie:", error);
      throw error;
    }
}
