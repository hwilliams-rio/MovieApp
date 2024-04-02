export async function RemoveMovieAPI(movieId: number) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    try {
      await fetch(`https://localhost:7146/Movies/DeleteMovie?id=${movieId}`, {
        ...requestOptions,
      });

    } catch (error) {
      console.error("Error deleting movie:", error);
      throw error;
    }
  }