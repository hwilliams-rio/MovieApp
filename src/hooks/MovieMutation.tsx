import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddMovieAPI } from "../apis/AddMovie";

const useMovieMutations = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: AddMovieAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["movies"] });
        },
        onError: (error) => {
            console.error('Error submitting post:', error.message);
          }
    });
};

export default useMovieMutations;
