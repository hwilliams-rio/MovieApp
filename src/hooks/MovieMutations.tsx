import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddMovieAPI } from "../apis/AddMovie";

const useMovieMutations = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: AddMovieAPI,
        onSuccess: () => {
            // If response is successful, refetch movies
            queryClient.refetchQueries({ queryKey: ["movies"] });
        },
        onError: (error) => {
            // Handle submission error here
            console.error('Error submitting post:', error.message);
          }
    });
};

export default useMovieMutations;
