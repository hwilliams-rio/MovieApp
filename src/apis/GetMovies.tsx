export async function GetMoviesAPI() {
    try {
      const response = await fetch("https://localhost:7146/Movies/GetAllMovies");
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  }